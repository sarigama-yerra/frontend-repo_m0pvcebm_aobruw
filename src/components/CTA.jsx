import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(60%_60%_at_80%_-10%,white,transparent_60%)]" />
          <div className="relative z-10 grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Join the next cohort</h2>
              <p className="mt-3 text-white/90 max-w-prose">Level up with an immersive, mentor-led experience. Learn by doing, collaborate with peers, and ship a portfolio project in 6 weeks.</p>
            </div>
            <div className="flex sm:justify-end items-center gap-3">
              <a href="#" className="px-5 py-3 rounded-xl bg-white text-neutral-900 font-medium shadow hover:shadow-md transition-shadow">Apply now</a>
              <a href="#" className="px-5 py-3 rounded-xl bg-neutral-900/20 text-white font-medium hover:bg-neutral-900/30 transition-colors">View syllabus</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
