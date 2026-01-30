'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    { label: 'Cerita Ohana', href: '#story' },
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
            ? 'rgba(255, 248, 240, 0.98)'
            : 'rgba(255, 248, 240, 0)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md border-b border-orange-200/20"
        style={{
          paddingTop: 'max(0.25rem, env(safe-area-inset-top))',
          paddingLeft: 'max(1rem, env(safe-area-inset-left))',
          paddingRight: 'max(1rem, env(safe-area-inset-right))',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 relative z-[110] block hover:opacity-80 transition-opacity"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
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
          <div className="hidden lg:flex gap-8 items-center relative z-[110]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium nav-link hover:text-[var(--highlight-start)] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="px-6 py-2 rounded-full btn-sunset font-semibold text-sm h-auto flex items-center border-none shadow-md hover:shadow-lg transition-all"
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-full hover:bg-orange-100/50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-orange-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </Button>
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
              className="fixed inset-0 bg-black/40 z-[120] lg:hidden backdrop-blur-sm"
            />

            {/* Menu */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-0 w-full bg-gradient-to-b from-orange-300/95 via-orange-200/95 to-rose-100/95 z-[130] flex flex-col shadow-2xl lg:hidden backdrop-blur-md"
              style={{
                paddingTop: 'env(safe-area-inset-top)',
                maxHeight: '85vh',
                overflow: 'auto',
              }}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center px-6 py-6 border-b border-orange-200/30">
                <Link
                  href="/"
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/ohana-logo.png"
                    alt="Ohana Logo"
                    width={220}
                    height={88}
                    className="h-10 w-auto max-w-[120px]"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full hover:bg-white/30"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6 text-orange-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>

              {/* Menu Items Stacking Tidy */}
              <nav className="px-6 py-4">
                <div className="flex flex-col gap-0 items-center">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full text-center text-lg font-medium text-orange-950 py-2.5 px-4 rounded-lg hover:bg-white/20 transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* CTA Footer */}
              <div className="px-6 pb-12 pt-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full py-6 text-lg rounded-2xl btn-sunset font-bold border-none shadow-xl h-auto"
                >
                  Order via WhatsApp
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
