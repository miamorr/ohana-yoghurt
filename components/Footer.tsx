'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Bogor, Indonesia',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '+62 821-2515-6872',
      action: () => window.open('https://wa.me/6282125156872', '_blank'),
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-orange-100/80 via-pink-50/60 to-purple-50/40 backdrop-blur-sm border-t border-orange-200/30">
      {/* Decorative background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen h-64 bg-gradient-to-r from-orange-200/20 via-pink-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <Image
              src="/ohana-logo.png"
              alt="Ohana Logo"
              width={220}
              height={88}
              className="h-10 w-auto max-w-[120px] opacity-80"
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center"
          >
            {contactInfo.map((info, idx) => (
              <motion.button
                key={idx}
                onClick={info.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                whileHover={{ scale: info.action ? 1.05 : 1 }}
                whileTap={{ scale: info.action ? 0.95 : 1 }}
                className={`flex items-center gap-2 text-sm sm:text-base oh-body hover:text-orange-700 transition-colors ${
                  info.action ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <span className="text-orange-500">{info.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-xs text-orange-600/70">{info.label}</div>
                  <div className="sun-haze">{info.value}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 border-t border-orange-200/40 w-full max-w-md"
          >
            <p className="text-xs sm:text-sm oh-body text-center leading-relaxed sun-haze">
              © {currentYear} Ohana. All rights reserved.
            </p>
            <p className="text-xs oh-body text-center mt-1 text-orange-600/70">
              Made with ❤️ for family moments
            </p>
          </motion.div>


        </div>
      </div>
    </footer>
  )
}