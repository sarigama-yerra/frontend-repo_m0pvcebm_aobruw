import { motion } from 'framer-motion'
import { Star, Clock, Layers } from 'lucide-react'

const courses = [
  {
    title: 'Intro to AI & Machine Learning',
    level: 'Beginner',
    duration: '6 weeks',
    rating: 4.8,
    color: 'from-blue-500 to-indigo-500',
    description: 'Build intuition for AI, train your first models, and deploy a simple app.'
  },
  {
    title: 'Web 3D with React & Spline',
    level: 'Intermediate',
    duration: '4 weeks',
    rating: 4.7,
    color: 'from-emerald-500 to-teal-500',
    description: 'Create immersive, interactive 3D experiences for the web.'
  },
  {
    title: 'Climate Data Science',
    level: 'Intermediate',
    duration: '5 weeks',
    rating: 4.9,
    color: 'from-rose-500 to-orange-500',
    description: 'Analyze environmental datasets and communicate insights that matter.'
  },
]

export default function Courses() {
  return (
    <section id="courses" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Popular courses</h2>
          <p className="mt-4 text-neutral-600">Handpicked, project-first courses designed with mentors and industry partners.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <motion.article
              key={c.title}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className={`h-28 bg-gradient-to-br ${c.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100"><Layers className="w-3 h-3" /> {c.level}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100"><Clock className="w-3 h-3" /> {c.duration}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{c.title}</h3>
                <p className="mt-2 text-neutral-600 text-sm">{c.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.round(c.rating) ? '' : 'opacity-30'}`} fill="currentColor" />
                    ))}
                  </div>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700">View details</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
