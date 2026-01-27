'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Cerita Ohana', href: '#cerita' },
    { label: 'Produk', href: '#products' },
    { label: 'Mengapa Ohana?', href: '#mengapa-ohana' },
  ]

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.querySelector(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(255, 248, 240, 0)' }}
      animate={{
        backgroundColor: isScrolled
          ? 'rgba(255, 248, 240, 0.95)'
          : 'rgba(255, 248, 240, 0)',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-orange-200/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer flex items-center"
          >
            <Image
              src="/ohana-logo.png"
              alt="Ohana Logo"
              width={220}
              height={88}
              className="h-8 md:h-12 lg:h-16 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Navigation Items */}
        <div className="flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ y: -2 }}
              className="relative text-sm font-medium nav-link hover:text-[var(--highlight-start)] transition-colors"
              asChild={false}
            >
              {item.href.startsWith('#') ? (
                <span className="relative cursor-pointer">
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              ) : (
                <Link href={item.href}>
                  <span className="relative">
                    {item.label}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </span>
                </Link>
              )}
            </motion.button>
          ))}

          <motion.button
            onClick={() => window.open('https://wa.me/6282125156872', '_blank')}
            whileHover={{ scale: 1.02, boxShadow: '0 14px 40px rgba(251,113,133,0.45)' }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2 rounded-lg btn-sunset font-medium text-sm"
          >
            Order via WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
