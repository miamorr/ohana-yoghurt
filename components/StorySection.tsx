'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const storyText = `Ohana berarti keluarga — tempat di mana cinta abadi berkembang. Kami tidak menghasilkan yoghurt dalam jumlah besar. Kami membuat setiap batch dengan tangan, dengan hati, dan dengan janji untuk memberikan yang terbaik bagi keluarga Anda.

Di sore hari, ketika matahari mulai memudar dan angin menjadi lembut, itulah waktu Ohana. Waktu untuk bersantai. Waktu untuk bersama orang-orang terkasih. Waktu untuk merasakan yoghurt yang hangat, lembut, dan dibuat dengan cinta.

Ohana bukan sekadar yoghurt. Ini adalah momen. Ini adalah kebersamaan. Ini adalah rumah.`

  return (
    <section
      ref={ref}
      id="cerita"
      className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        className="hidden lg:block absolute -top-40 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-bl from-pink-300/30 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          y: isInView ? [0, 30, 0] : 0,
        }}
        transition={{
          duration: 6,
          repeat: isInView ? Infinity : 0,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold oh-head mb-6 sm:mb-8 sun-haze">Cerita Ohana</h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg oh-body font-light leading-normal sm:leading-relaxed sun-haze">
            {storyText.split('\n\n').map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-pink-300/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/story-illustration.jpg"
              alt="Ohana Family Story"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </motion.div>

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-300 rounded-full blur-sm"
              animate={{
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
