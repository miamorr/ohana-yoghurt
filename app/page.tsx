'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import ProductSection from '@/components/ProductSection'
import ComparisonSection from '@/components/ComparisonSection'
import ClosingSection from '@/components/ClosingSection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <main className="overflow-x-hidden">
      <Navigation />
<div className="pt-[72px] lg:pt-0">
        <Hero />
        <StorySection />
        <ProductSection />
        <ComparisonSection />
        <ClosingSection />
        <Footer />
      </div>
    </main>
  )
}
