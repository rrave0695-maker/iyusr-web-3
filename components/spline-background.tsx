"use client"

import Spline from "@splinetool/react-spline"
import { useEffect, useRef } from "react"

export function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioPlayedRef = useRef(false)

  useEffect(() => {
    // Play audio on first user interaction or when Spline loads (whichever comes first)
    const playStartAudio = () => {
      if (audioPlayedRef.current) return // Prevent double playing
      
      if (audioRef.current) {
        audioPlayedRef.current = true
        audioRef.current.play()
          .then(() => {
            console.log("✓ Audio_start playing successfully")
          })
          .catch((error) => {
            console.log("✗ Audio_start failed to play:", error.message)
            audioPlayedRef.current = false // Reset flag if play fails
          })
      }
    }

    const handleUserInteraction = () => {
      console.log("User interacted, playing audio_start...")
      playStartAudio()
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }

    // Add listeners for first user interaction
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)

    // Also listen for Spline load event
    const handleSplineLoad = () => {
      console.log("✓ Spline loaded successfully!")
      console.log("Playing audio after Spline load...")
      playStartAudio()
    }

    let splineElement: any = null
    let loadListenerAttached = false

    // Check for spline element and attach load listener
    const attachSplineListener = () => {
      splineElement = containerRef.current?.querySelector('spline-viewer') as any
      if (splineElement && !loadListenerAttached) {
        console.log("✓ Spline element found, attaching load listener...")
        splineElement.addEventListener('load', handleSplineLoad)
        loadListenerAttached = true
        return true
      }
      return false
    }

    // Try to attach immediately
    const foundImmediately = attachSplineListener()

    // If not found, use MutationObserver to watch for Spline element
    let observer: MutationObserver | null = null
    if (!foundImmediately) {
      console.log("✗ Spline element not found yet, watching for it...")
      observer = new MutationObserver((mutations) => {
        if (attachSplineListener()) {
          console.log("✓ Spline element appeared in DOM!")
          observer?.disconnect()
        }
      })

      if (containerRef.current) {
        observer.observe(containerRef.current, {
          childList: true,
          subtree: true,
          attributes: false,
        })
      }
    }

    // Fallback: also retry after a delay
    const retryTimeout = setTimeout(() => {
      if (!loadListenerAttached && attachSplineListener()) {
        console.log("✓ Spline element found on retry!")
      }
    }, 2000)

    return () => {
      clearTimeout(retryTimeout)
      observer?.disconnect()
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      if (splineElement && loadListenerAttached) {
        console.log("Removing Spline load listener...")
        splineElement.removeEventListener('load', handleSplineLoad)
      }
    }
  }, [])

  useEffect(() => {
    // Remove Spline logo from shadow DOM
    const removeLogo = () => {
      if (containerRef.current) {
        // Find spline-viewer web component anywhere in the container
        const viewer = containerRef.current.querySelector('spline-viewer') as any
        if (viewer && viewer.shadowRoot) {
          const logo = viewer.shadowRoot.querySelector('[class*="logo"]') || 
                       viewer.shadowRoot.querySelector('svg[class*="watermark"]') ||
                       viewer.shadowRoot.querySelector('[data-watermark]')
          if (logo) {
            logo.style.display = 'none'
          }
        }
      }
    }

    // Try to remove logo on initial load
    removeLogo()

    // Also try after a delay to catch async rendering
    const timeout1 = setTimeout(removeLogo, 500)
    const timeout2 = setTimeout(removeLogo, 1500)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <div 
    className="absolute z-0 overflow-hidden flex items-center justify-center top-0 left-0 w-full h-full pointer-events-none"
    >
      {/* Hidden audio element for startup sound */}
      <audio 
        ref={audioRef} 
        preload="auto"
        src="/audio_start.mp3"
      />
      
      <div ref={containerRef} className="w-full h-full">
        {/* <Spline scene="https://prod.spline.design/IQoqKhKfkxWhiS0P/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/IcqG3aag2PIsrfq8/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/IcqG3aag2PIsrfq8/scene.splinecode" />
      </div>
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
          zIndex: 1,
        }}
      />
    </div>
  )
}
