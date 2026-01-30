'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export default function AnimatedSunset() {
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 800], [0, 1])
  const opacity = useTransform(scrollProgress, [0, 1], [1, 0.5])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 animate-sunset"
      style={{
        height: '100dvh',
        opacity,
      }}
    >
      {/* Animated Waves */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[100px] sunset-wave"
            style={{
              top: `${20 + i * 15}%`,
              background: `linear-gradient(90deg, 
                rgba(255, 200, 100, ${0.1 - i * 0.02}) 0%, 
                rgba(255, 150, 150, ${0.15 - i * 0.02}) 50%, 
                rgba(200, 150, 200, ${0.1 - i * 0.02}) 100%)`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${7 + i}s`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
