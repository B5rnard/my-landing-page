// app/page.tsx
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#191A23] text-white">
        <div className="container mx-auto px-4 py-16">
          <nav className="flex justify-between items-center mb-16">
            <h1 className="text-2xl font-bold">My Landing Page</h1>
            <button className="bg-[#B9FF66] text-black px-6 py-2 rounded-full">
              Get Started
            </button>
          </nav>
          
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Welcome to our site
            </h2>
            <p className="text-xl mb-8">
              Building something amazing with Next.js and Tailwind CSS.
            </p>
            <button className="bg-[#B9FF66] text-black px-8 py-3 rounded-full flex items-center gap-2">
              Get Started <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}