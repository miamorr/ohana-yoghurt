'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Cerita Ohana', href: '#cerita' },
    { label: 'Produk', href: '#products' },
    { label: 'Mengapa Ohana?', href: '#mengapa-ohana' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6282125156872', '_blank')
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'rgba(255, 248, 240, 0)' }}
        animate={{
          backgroundColor: isScrolled
            ? 'rgba(255, 248, 240, 0.95)'
            : 'rgba(255, 248, 240, 0)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-orange-200/20 lg:sticky"
        style={{
          paddingTop: 'max(1rem, env(safe-area-inset-top))',
          paddingLeft: 'max(1rem, env(safe-area-inset-left))',
          paddingRight: 'max(1rem, env(safe-area-inset-right))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/ohana-logo.png"
              alt="Ohana Logo"
              width={220}
              height={88}
              className="h-8 lg:h-12 w-auto max-w-[80px] lg:max-w-[120px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium nav-link hover:text-[var(--highlight-start)] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 rounded-lg btn-sunset font-medium text-sm min-h-[44px] flex items-center"
            >
              Order via WhatsApp
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 right-0 top-0 w-full bg-gradient-to-b from-orange-300/80 via-orange-200/70 to-rose-100/60 z-50 flex flex-col border-b border-orange-300/40 shadow-lg backdrop-blur-sm"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                maxHeight: 'min(70vh, auto)',
                overflow: 'auto',
              }}
            >
              {/* Close Button Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-orange-300/30">
                <Image
                  src="/ohana-logo.png"
                  alt="Ohana Logo"
                  width={220}
                  height={88}
                  className="h-8 w-auto max-w-[100px]"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 hover:bg-white/30 rounded transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-orange-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-base font-medium nav-link hover:text-orange-950 transition-colors py-3 px-2 rounded hover:bg-white/40 text-orange-900"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-6 py-4 border-t border-orange-300/30">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full px-4 py-3 rounded-lg btn-sunset font-semibold text-sm"
                >
                  Order via WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
