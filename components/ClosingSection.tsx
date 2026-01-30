'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'

export default function ClosingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const closingText = `Saat matahari terbenam dan langit berubah warna, saat angin membawa kehangatan, saat keluarga berkumpul di sekitar meja — itulah saatnya Ohana. Rasa yoghurt yang lembut, creamy, dan dibuat dengan cinta. Rasa yang membawa Anda kembali ke rumah, setiap kali.`

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
          {closingText}
        </motion.p>

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

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.98 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="mt-8 sm:mt-12"
        >
          <Button
            onClick={() => window.open('https://wa.me/6282125156872', '_blank')}
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-8 rounded-full btn-sunset font-bold text-base sm:text-xl shadow-2xl h-auto border-none"
          >
            Pesan Sekarang
          </Button>
        </motion.div>
      </div>
    </section>
  )
}