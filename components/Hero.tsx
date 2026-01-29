'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AnimatedSunset from './AnimatedSunset'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedSunset />

      <motion.div
        className="hidden lg:block absolute top-20 right-20 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-orange-400/30 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="hidden lg:block absolute bottom-20 left-20 w-56 sm:w-64 lg:w-72 h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

<motion.div
        style={{ y: isDesktop ? y : 0 }}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-24 sm:-translate-y-28 lg:-translate-y-32 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-gradient-radial from-yellow-300/40 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold oh-head mb-6 leading-tight relative z-20 sun-haze"
        >
          Taste the <span className="sun-highlight">Warmth</span> of <span className="sun-highlight">Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-lg oh-body mb-8 sm:mb-12 leading-normal md:leading-relaxed font-light sun-haze"
        >
          Setiap tegukan Ohana membawa kehangatan keluarga, momen tenang di sore
          hari, dan cinta yang tak terlupakan dalam setiap sendok.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap sm:flex-nowrap w-full max-w-2xl"
        >
          <motion.button
            onClick={() => {
              document
                .querySelector('#story')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-[var(--highlight-start)] text-[var(--highlight-start)] font-bold text-sm sm:text-lg hover:bg-[rgba(245,158,11,0.06)] transition-colors sun-haze min-h-[44px] flex items-center justify-center"
          >
            Explore OhanaLand
          </motion.button>

          <motion.button
            onClick={() => window.open('https://wa.me/6282125156872', '_blank')}
            whileHover={{ scale: 1.02, boxShadow: '0 14px 40px rgba(251,113,133,0.45)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 rounded-full btn-sunset font-bold text-sm sm:text-lg min-h-[44px] flex items-center justify-center whitespace-nowrap"
          >
            Order via WhatsApp
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  )
}
