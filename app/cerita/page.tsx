'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScroll, useTransform } from 'framer-motion'

export default function CeritaPage() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const storyText = `Ohana berarti keluarga — tempat di mana cinta abadi berkembang. Kami tidak menghasilkan yoghurt dalam jumlah besar. Kami membuat setiap batch dengan tangan, dengan hati, dan dengan janji untuk memberikan yang terbaik bagi keluarga Anda.

Di sore hari, ketika matahari mulai memudar dan angin menjadi lembut, itulah waktu Ohana. Waktu untuk bersantai. Waktu untuk bersama orang-orang terkasih. Waktu untuk merasakan yoghurt yang hangat, lembut, dan dibuat dengan cinta.

Kami percaya bahwa yoghurt terbaik datang dari hati yang tulus. Setiap bahan dipilih dengan cermat. Setiap proses dilakukan dengan penuh perhatian. Setiap batch adalah cerita cinta untuk keluarga Anda.

Ohana bukan sekadar yoghurt. Ini adalah momen. Ini adalah kebersamaan. Ini adalah rumah.`

  return (
    <main className="min-h-screen">
      <motion.section
        style={{ y }}
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 via-pink-300/20 to-transparent" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold oh-head mb-6 sun-haze">
              Cerita <span className="sun-highlight">Ohana</span>
            </h1>
            <p className="text-xl oh-body font-light sun-haze">
              Keluarga, cinta, dan kehangatan dalam setiap sendok.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-lg oh-body font-light leading-relaxed sun-haze"
          >
            {storyText.split('\n\n').map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="px-8 py-3 rounded-full border-2 border-[var(--highlight-start)] text-[var(--nav-link)] font-bold hover:bg-[rgba(245,158,11,0.06)] transition-colors sun-haze"
              >
                Kembali ke Beranda
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
