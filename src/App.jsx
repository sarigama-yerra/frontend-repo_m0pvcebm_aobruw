import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="py-12 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <a href="#" className="hover:text-neutral-800">Privacy</a>
                <a href="#" className="hover:text-neutral-800">Terms</a>
                <a href="#" className="hover:text-neutral-800">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
