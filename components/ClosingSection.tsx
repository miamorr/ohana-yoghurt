'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function ClosingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const button = buttonRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        overwrite: 'auto',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const closingText = `Saat matahari terbenam dan langit berubah warna, saat angin membawa kehangatan, saat keluarga berkumpul di sekitar meja — itulah saatnya Ohana. Rasa yoghurt yang lembut, creamy, dan dibuat dengan cinta. Rasa yang membawa Anda kembali ke rumah, setiap kali.`

  const closingTitle = ['Ohana adalah cinta.', 'Ohana adalah keluarga.', 'Ohana adalah rumah.']


  return (
    <section
      ref={ref}
      id="closing"
      className="relative min-h-screen py-12 sm:py-16 md:py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen h-screen bg-gradient-to-br from-orange-300/20 via-pink-300/20 to-purple-300/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl oh-body mb-8 sm:mb-12 font-light leading-normal sm:leading-relaxed sun-haze"
        >
         </motion.p>
        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          {closingTitle.map((line, idx) => (
            <motion.h2
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold oh-head sun-highlight"
            >
              {line}
            </motion.h2>
          ))}
        </div>

        {/* Ohana Sunset Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: -5 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-4 max-w-4xl mx-auto px-4"
        >
          <img
            src="/ohana-sunset.png"
            alt="Ohana sunset with family gathering"
            width={800}
            height={400}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.button
          ref={buttonRef}
          onClick={() => window.open('https://wa.me/6282125156872', '_blank')}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 14px 40px rgba(251,113,133,0.45)',
          }}
          whileTap={{ scale: 0.98 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-5 rounded-full btn-sunset font-bold text-base sm:text-xl shadow-2xl min-h-[44px]"
        >
          Pesan Sekarang
        </motion.button>
      </div>
    </section>
  )
}