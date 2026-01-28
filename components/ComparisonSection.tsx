'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const comparisonData = [
    { feature: '', ohana: 'Ohana Yogurt', market: 'Produk Pasaran', isHeader: true },
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
    <section ref={ref} id="mengapa-ohana" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="hidden lg:block absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-tl from-purple-300/30 to-transparent rounded-full blur-3xl pointer-events-none"
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
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center oh-head mb-12 sm:mb-16 sun-haze"
        >
          Mengapa Ohana?
        </motion.h2>

        <div className="space-y-2 sm:space-y-3">
          {comparisonData.map((row, idx) => {
            return (
            <motion.div
              key={idx}
              variants={row.isHeader ? undefined : rowVariants}
              initial={row.isHeader ? undefined : "hidden"}
              animate={row.isHeader ? undefined : (isInView ? 'visible' : 'hidden')}
              transition={row.isHeader ? undefined : { delay: idx * 0.1 }}
              className={`grid grid-cols-3 gap-0 p-3 sm:p-6 rounded-2xl transition-all duration-300 ${
                row.isHeader
                  ? 'bg-gradient-to-r from-orange-300/25 to-pink-300/25 font-bold'
                  : 'backdrop-blur-md bg-[rgba(255,250,240,0.45)] border border-[rgba(255,250,240,0.12)] hover:bg-[rgba(255,250,240,0.6)]'
              }`}
            >
              {/* Feature name */}
              <div className={`font-semibold text-xs sm:text-base oh-head`}>
                {row.feature}
              </div>
              
              {/* Column 1: Ohana Yogurt */}
              <motion.div
                whileHover={!row.isHeader ? { scale: 1.05 } : undefined}
                className={`text-center font-medium text-xs sm:text-sm ${
                  row.isHeader ? 'oh-head sun-haze' : 'text-green-700'
                }`}
              >
                {row.ohana}
              </motion.div>
              
              {/* Column 2: Produk Pasaran */}
              <motion.div
                whileHover={!row.isHeader ? { scale: 1.05 } : undefined}
                className={`text-center font-medium text-xs sm:text-sm ${
                  row.isHeader ? 'oh-head sun-haze' : 'oh-body'
                }`}
              >
                {row.market}
              </motion.div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
