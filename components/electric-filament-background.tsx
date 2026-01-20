"use client"

import { useEffect, useRef, useCallback } from "react"

interface Shape {
  id: number
  points: { x: number; y: number }[]
  centerX: number
  centerY: number
  size: number
  cornerRadius: number
  baseOpacity: number
  currentOpacity: number
  glowIntensity: number
  targetGlow: number
}

export function ElectricFilamentBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shapesRef = useRef<Shape[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationRef = useRef<number>(0)

  const createShapes = useCallback((width: number, height: number) => {
    const shapes: Shape[] = []
    
    // 9 positions well spread across the viewport
    const positions = [
      { x: 0.06, y: 0.1 },
      { x: 0.5, y: 0.05 },
      { x: 0.94, y: 0.12 },
      { x: 0.1, y: 0.5 },
      { x: 0.5, y: 0.5 },
      { x: 0.9, y: 0.48 },
      { x: 0.06, y: 0.9 },
      { x: 0.5, y: 0.92 },
      { x: 0.94, y: 0.88 },
    ]

    positions.forEach((pos, id) => {
      const size = 180 + Math.random() * 70 // Large hexagons (180-250px)
      const cx = pos.x * width
      const cy = pos.y * height

      const points: { x: number; y: number }[] = []

      // Fixed flat-top hexagon orientation
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 2
        points.push({
          x: cx + Math.cos(angle) * size,
          y: cy + Math.sin(angle) * size,
        })
      }

      shapes.push({
        id,
        points,
        centerX: cx,
        centerY: cy,
        size,
        cornerRadius: 24 + Math.random() * 10,
        baseOpacity: 0.04 + Math.random() * 0.02,
        currentOpacity: 0.04,
        glowIntensity: 0,
        targetGlow: 0,
      })
    })
    
    return shapes
  }, [])

  // Check if point is near any edge of the hexagon
  const distanceToEdge = useCallback((mx: number, my: number, shape: Shape) => {
    let minDist = Infinity
    const points = shape.points
    
    for (let i = 0; i < points.length; i++) {
      const p1 = points[i]
      const p2 = points[(i + 1) % points.length]
      
      // Distance from point to line segment
      const dx = p2.x - p1.x
      const dy = p2.y - p1.y
      const len2 = dx * dx + dy * dy
      
      let t = Math.max(0, Math.min(1, ((mx - p1.x) * dx + (my - p1.y) * dy) / len2))
      
      const nearestX = p1.x + t * dx
      const nearestY = p1.y + t * dy
      
      const dist = Math.hypot(mx - nearestX, my - nearestY)
      minDist = Math.min(minDist, dist)
    }
    
    return minDist
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      shapesRef.current = createShapes(window.innerWidth, window.innerHeight)
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, width, height)

      for (const shape of shapesRef.current) {
        const hoverThreshold = 80 // Distance to trigger highlight
        
        // Check distance to nearest edge
        const edgeDist = distanceToEdge(mx, my, shape)
        
        if (edgeDist < hoverThreshold) {
          // Smooth intensity based on distance
          const intensity = Math.pow(1 - edgeDist / hoverThreshold, 1.5)
          shape.targetGlow = intensity
        } else {
          shape.targetGlow = 0
        }

        // Smooth interpolation for glow
        shape.glowIntensity += (shape.targetGlow - shape.glowIntensity) * 0.12
        
        // Update opacity based on glow
        const targetOpacity = shape.baseOpacity + shape.glowIntensity * 0.06
        shape.currentOpacity += (targetOpacity - shape.currentOpacity) * 0.12

        // Draw glowing border when active
        if (shape.glowIntensity > 0.01) {
          ctx.save()
          
          // Outer glow layer
          ctx.shadowColor = `rgba(56, 189, 248, ${shape.glowIntensity * 0.7})`
          ctx.shadowBlur = 30 + shape.glowIntensity * 40
          ctx.strokeStyle = `rgba(56, 189, 248, ${shape.glowIntensity * 0.9})`
          ctx.lineWidth = 2
          drawRoundedHexagon(ctx, shape.points, shape.cornerRadius)
          ctx.stroke()
          
          // Inner bright core
          ctx.shadowBlur = 15
          ctx.shadowColor = `rgba(120, 210, 255, ${shape.glowIntensity * 0.5})`
          ctx.strokeStyle = `rgba(140, 220, 255, ${shape.glowIntensity * 0.6})`
          ctx.lineWidth = 1.5
          drawRoundedHexagon(ctx, shape.points, shape.cornerRadius)
          ctx.stroke()
          
          ctx.restore()
        }

        // Draw base hexagon outline (subtle)
        ctx.strokeStyle = `rgba(80, 120, 150, ${shape.currentOpacity})`
        ctx.lineWidth = 1
        drawRoundedHexagon(ctx, shape.points, shape.cornerRadius)
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [createShapes, distanceToEdge])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}

// Helper function to draw rounded hexagon
function drawRoundedHexagon(
  ctx: CanvasRenderingContext2D,
  points: { x: number; y: number }[],
  radius: number
) {
  const len = points.length
  ctx.beginPath()
  for (let i = 0; i < len; i++) {
    const p0 = points[(i - 1 + len) % len]
    const p1 = points[i]
    const p2 = points[(i + 1) % len]

    const v1x = p0.x - p1.x
    const v1y = p0.y - p1.y
    const v2x = p2.x - p1.x
    const v2y = p2.y - p1.y

    const len1 = Math.sqrt(v1x * v1x + v1y * v1y)
    const len2 = Math.sqrt(v2x * v2x + v2y * v2y)

    const n1x = v1x / len1
    const n1y = v1y / len1
    const n2x = v2x / len2
    const n2y = v2y / len2

    const arcStart = {
      x: p1.x + n1x * radius,
      y: p1.y + n1y * radius,
    }
    const arcEnd = {
      x: p1.x + n2x * radius,
      y: p1.y + n2y * radius,
    }

    if (i === 0) {
      ctx.moveTo(arcStart.x, arcStart.y)
    } else {
      ctx.lineTo(arcStart.x, arcStart.y)
    }
    ctx.quadraticCurveTo(p1.x, p1.y, arcEnd.x, arcEnd.y)
  }
  ctx.closePath()
}
