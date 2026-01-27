'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StorySection from '@/components/StorySection'
import ProductSection from '@/components/ProductSection'
import ComparisonSection from '@/components/ComparisonSection'
import ClosingSection from '@/components/ClosingSection'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical' as const,
      gestureDirection: 'vertical' as const,
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <main>
      <Navigation />
      <Hero />
      <StorySection />
      <ProductSection />
      <ComparisonSection />
      <ClosingSection />
    </main>
  )
}
