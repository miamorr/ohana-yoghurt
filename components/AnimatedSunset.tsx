'use client'

import { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function AnimatedSunset() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 800], [0, 1])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number
    let time = 0

    const drawSunset = () => {
      time += 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)

      const hue1 = Math.sin(time * 0.5) * 30 + 10
      const hue2 = Math.sin(time * 0.3 + 1) * 30 + 35
      const hue3 = Math.sin(time * 0.2 + 2) * 30 + 55
      const hue4 = Math.sin(time * 0.1 + 3) * 30 + 80

      gradient.addColorStop(0, `hsl(${hue1}, 100%, 65%)`)
      gradient.addColorStop(0.25, `hsl(${hue2}, 100%, 70%)`)
      gradient.addColorStop(0.5, `hsl(${hue3}, 100%, 70%)`)
      gradient.addColorStop(0.75, `hsl(${hue4}, 70%, 75%)`)
      gradient.addColorStop(1, `hsl(280, 50%, 85%)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < 5; i++) {
        const waveOffset = Math.sin(time * 0.3 + i * 2) * 30
        const waveGradient = ctx.createLinearGradient(
          0,
          canvas.height * (0.2 + i * 0.15) + waveOffset,
          canvas.width,
          canvas.height * (0.2 + i * 0.15) + waveOffset
        )

        waveGradient.addColorStop(0, `rgba(255, 200, 100, ${0.1 - i * 0.02})`)
        waveGradient.addColorStop(0.5, `rgba(255, 150, 150, ${0.15 - i * 0.02})`)
        waveGradient.addColorStop(1, `rgba(200, 150, 200, ${0.1 - i * 0.02})`)

        ctx.fillStyle = waveGradient
        ctx.fillRect(0, canvas.height * (0.2 + i * 0.15) + waveOffset - 50, canvas.width, 100)
      }

      animationId = requestAnimationFrame(drawSunset)
    }

    drawSunset()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0"
      style={{
        opacity: useTransform(scrollProgress, [0, 1], [1, 0.5]),
      }}
    />
  )
}
