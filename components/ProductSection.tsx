'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function ProductSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const products = [
    {
      size: '500g',
      price: 'Rp 30.000',
      subline: 'Cocok untuk malam yang tenang',
      description: 'Dibuat segar setiap hari. Tanpa pengawet. Tanpa gula tambahan. Murni keluarga.',
      gradient: 'from-orange-400 to-peach',
    },
    {
      size: '1kg',
      price: 'Rp 60.000',
      subline: 'Dibuat untuk dinikmati bersama',
      description: 'Sempurna untuk dibagikan dengan keluarga tercinta. Semakin banyak, semakin banyak cinta.',
      gradient: 'from-pink-400 to-orange-300',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} id="products" className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="hidden lg:block absolute top-20 left-20 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-peach/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          y: isInView ? [0, 40, 0] : 0,
        }}
        transition={{
          duration: 8,
          repeat: isInView ? Infinity : 0,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center oh-head mb-12 sm:mb-16 sun-haze"
        >
          Produk Kami
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
        >
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/0 to-pink-300/0 group-hover:from-orange-300/20 group-hover:to-pink-300/20 rounded-3xl blur-2xl transition-all duration-500" />

              <motion.div
                className="relative backdrop-blur-md bg-white/40 rounded-3xl p-8 border border-white/20 shadow-2xl"
                whileHover={{
                  boxShadow: '0 20px 60px rgba(255, 140, 66, 0.2)',
                }}
              >
              <motion.div
                  className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/product-yogurt.jpg"
                    alt="Ohana Yogurt"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </motion.div>


                <h3 className="text-xl sm:text-2xl font-bold oh-head mb-2">
                  Ohana Plain Yoghurt
                </h3>
                <p className="oh-body text-xs sm:text-sm mb-4">{product.size}</p>

                <p className="text-2xl sm:text-3xl font-bold sun-highlight mb-4">
                  {product.price}
                </p>

                <p className="oh-body italic font-light mb-3 text-sm">
                  {product.subline}
                </p>

                <p className="oh-body text-xs sm:text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                <motion.button
                  onClick={() =>
                    window.open('https://wa.me/6282125156872', '_blank')
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-full btn-sunset font-bold shadow-lg min-h-[44px]"
                >
                  Pesan Sekarang
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
