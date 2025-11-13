import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.20),rgba(99,102,241,0.08)_40%,transparent_80%)]">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-10">
        <div className="max-w-xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Future-ready learning for everyone
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-neutral-700"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore interactive courses powered by AI, immersive 3D lessons, and a community of lifelong learners. Build skills in technology, science, and the environment.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#courses" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:shadow-md transition-shadow">Browse courses</a>
            <a href="#about" className="px-5 py-3 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors">How it works</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { label: 'Interactive 3D', value: 'Immersive' },
              { label: 'AI Tutors', value: 'Personalized' },
              { label: 'Eco Focus', value: 'Sustainable' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/40 bg-white/60 backdrop-blur-md p-4 text-center">
                <div className="text-sm text-neutral-500">{item.label}</div>
                <div className="text-base font-semibold text-neutral-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block"></div>
      </div>
    </section>
  )
}
