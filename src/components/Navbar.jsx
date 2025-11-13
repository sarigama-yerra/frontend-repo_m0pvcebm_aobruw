import { Menu, School, Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/30 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <motion.a
              href="#"
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
                <School className="w-5 h-5" />
              </div>
              <span className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">EduSphere</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-6 text-neutral-600 dark:text-neutral-300">
              {[
                { label: 'Programs', href: '#programs' },
                { label: 'Courses', href: '#courses' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-md transition-shadow">
                Get Started
              </button>
              <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
