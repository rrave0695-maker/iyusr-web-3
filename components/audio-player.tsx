"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const STORAGE_KEY = "ambient-audio-paused"

// Animated waveform icon component
function WaveformIcon({ isPlaying, prefersReducedMotion }: { isPlaying: boolean; prefersReducedMotion: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="overflow-visible"
    >
      <path
        d={isPlaying 
          ? "M2 12C2 12 4 8 7 8C10 8 10 16 13 16C16 16 17 8 20 8C22 8 22 12 22 12"
          : "M2 12H22"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isPlaying && !prefersReducedMotion ? "animate-wave" : ""}
        style={{
          transition: "d 0.3s ease-in-out"
        }}
      />
    </svg>
  )
}
const VOLUME = 0.2 // 20% volume
const FADE_DURATION = 300 // 300ms fade

export function AudioPlayer({ variant = "fixed" }: { variant?: "fixed" | "inline" }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Initialize audio and restore state
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0
    audio.loop = true

    // Add error handler
    const handleError = () => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000)
    }

    audio.addEventListener("error", handleError)

    // Declare handleCanPlay function
    const handleCanPlay = () => {
      console.log("Audio can play through");
    }

    audio.addEventListener("canplaythrough", handleCanPlay)

    // Check localStorage for persisted state
    const wasPaused = localStorage.getItem(STORAGE_KEY) === "true"
    if (!wasPaused) {
      // User previously had audio playing, but we can't autoplay
      // They'll need to click to start
      setIsPlaying(false)
    }

    return () => {
      audio.removeEventListener("error", handleError)
    }
  }, [])

  // Fade audio in/out
  const fadeAudio = useCallback((targetVolume: number, onComplete?: () => void) => {
    const audio = audioRef.current
    if (!audio) return

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current)
    }

    // Skip fade if user prefers reduced motion
    if (prefersReducedMotion) {
      audio.volume = targetVolume
      onComplete?.()
      return
    }

    const startVolume = audio.volume
    const volumeDiff = targetVolume - startVolume
    const steps = 20
    const stepDuration = FADE_DURATION / steps
    let currentStep = 0

    fadeIntervalRef.current = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      // Ease-out curve for smoother fade
      const easedProgress = 1 - Math.pow(1 - progress, 2)
      audio.volume = startVolume + volumeDiff * easedProgress

      if (currentStep >= steps) {
        if (fadeIntervalRef.current) {
          clearInterval(fadeIntervalRef.current)
        }
        audio.volume = targetVolume
        onComplete?.()
      }
    }, stepDuration)
  }, [prefersReducedMotion])

  // Handle play/pause
  const toggleAudio = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      // Fade out then pause
      fadeAudio(0, () => {
        audio.pause()
      })
      setIsPlaying(false)
      localStorage.setItem(STORAGE_KEY, "true")
    } else {
      // Try to play with fade in
      try {
        await audio.play()
        fadeAudio(VOLUME)
        setIsPlaying(true)
        localStorage.setItem(STORAGE_KEY, "false")
        setShowTooltip(false)
      } catch {
        // Play was prevented (common on mobile)
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 3000)
      }
    }
  }, [isPlaying, fadeAudio])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Hidden audio element - using a public ambient audio track */}
      <audio 
        ref={audioRef} 
        preload="auto"
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
      />

      {/* Button container */}
      <div className={variant === "fixed" ? "fixed bottom-6 left-6 z-50 pointer-events-auto" : "relative"}>
        {/* Tooltip */}
        {showTooltip && (
          <div 
            className={`absolute ${variant === "fixed" ? "bottom-full left-0 mb-2" : "top-full left-1/2 -translate-x-1/2 mt-2"} px-3 py-1.5 text-xs text-white bg-black/80 backdrop-blur-sm rounded-lg whitespace-nowrap border border-white/10`}
            role="tooltip"
          >
            Tap to enable sound
          </div>
        )}

        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
          aria-pressed={isPlaying}
          className={`group relative flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            variant === "inline" 
              ? "w-9 h-9 bg-white/10 hover:bg-white/20 focus-visible:ring-white/30 focus-visible:ring-offset-transparent" 
              : "w-11 h-11 bg-gray-200/90 hover:bg-gray-300/90 focus-visible:ring-gray-400 focus-visible:ring-offset-black shadow-sm"
          }`}
        >
          {/* Waveform icon */}
          <span className={
            variant === "inline"
              ? (isPlaying ? "text-cyan-400" : "text-gray-400 group-hover:text-white transition-colors")
              : (isPlaying ? "text-gray-700" : "text-gray-500 group-hover:text-gray-700 transition-colors")
          }>
            <WaveformIcon isPlaying={isPlaying} prefersReducedMotion={prefersReducedMotion} />
          </span>
        </button>
      </div>
    </>
  )
}
