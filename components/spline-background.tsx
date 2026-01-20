"use client"

import Spline from "@splinetool/react-spline"
import { useEffect, useRef } from "react"

export function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Remove Spline logo from shadow DOM
    const interval = setInterval(() => {
      if (containerRef.current) {
        // Try to find spline-viewer web component
        const viewer = containerRef.current.querySelector('spline-viewer')
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('#logo')
          if (logo) {
            logo.remove()
            clearInterval(interval)
          }
        }
        

      }
    }, 500)

    // Cleanup after 10 seconds if logo not found
    const timeout = setTimeout(() => {
      clearInterval(interval)
    }, 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "auto",
        background: "#000000",
      }}
    >
      <Spline scene="https://prod.spline.design/IQoqKhKfkxWhiS0P/scene.splinecode" />
      {/* Gradient fade at bottom */}
      <div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to bottom, transparent, #000000)",
          pointerEvents: "none",
        }}
      />
    </div>
  )
}
