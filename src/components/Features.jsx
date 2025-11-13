import { motion } from 'framer-motion'
import { BrainCircuit, Users, Leaf, BookOpenCheck, Globe2, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: BrainCircuit,
    title: 'Adaptive AI Learning',
    desc: 'Personalized pathways that adapt to your goals, pace, and style.',
  },
  {
    icon: BookOpenCheck,
    title: 'Project-first Courses',
    desc: 'Learn by building real projects with step-by-step guidance.',
  },
  {
    icon: Users,
    title: 'Mentor-led Community',
    desc: 'Join cohorts, get feedback, and grow with peers and mentors.',
  },
  {
    icon: Leaf,
    title: 'Sustainability Focus',
    desc: 'Courses that connect tech skills with environmental impact.',
  },
  {
    icon: Globe2,
    title: 'Global Access',
    desc: 'Learn anywhere with mobile-friendly experiences and offline support.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Certificates',
    desc: 'Earn credentials backed by industry partners and institutions.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Everything you need to learn brilliantly</h2>
          <p className="mt-4 text-neutral-600">A modern platform that makes learning interactive, social, and future-proof.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
