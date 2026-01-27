'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const comparisonData = [
    { feature: 'Homemade', ohana: '✅ Ya', market: '❌ Tidak' },
    { feature: 'Tanpa Pengawet', ohana: '✅ Murni', market: '❌ Banyak Aditif' },
    {
      feature: 'Batch Keluarga',
      ohana: '✅ Segar Setiap Hari',
      market: '❌ Produksi Massal',
    },
    {
      feature: 'Rasa',
      ohana: '🧡 Lembut & Natural',
      market: '❌ Datar & Artifisial',
    },
    {
      feature: 'Dibuat Dengan Cinta',
      ohana: '✅ Selalu',
      market: '❌ Tidak Pernah',
    },
  ]

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} id="mengapa-ohana" className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-300/30 to-transparent rounded-full blur-3xl"
        animate={{
          x: isInView ? [0, 50, 0] : 0,
        }}
        transition={{
          duration: 8,
          repeat: isInView ? Infinity : 0,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="text-5xl font-bold text-center oh-head mb-16 sun-haze"
        >
          Mengapa Ohana?
        </motion.h2>

        <div className="space-y-3">
          {comparisonData.map((row, idx) => (
            <motion.div
              key={idx}
              variants={rowVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-3 gap-4 p-6 rounded-2xl backdrop-blur-md bg-[rgba(255,250,240,0.45)] border border-[rgba(255,250,240,0.12)] hover:bg-[rgba(255,250,240,0.6)] transition-all duration-300"
            >
                <div className="font-semibold oh-head">{row.feature}</div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center font-medium text-green-700"
              >
                {row.ohana}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center font-medium oh-body"
              >
                {row.market}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
