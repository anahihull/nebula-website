'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Star, Code, Rocket, Globe } from 'lucide-react'
import Link from 'next/link'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-300 text-white ${quicksand.className}`}>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-900/30 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold tracking-tight">Nebula Web</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm uppercase tracking-wide hover:text-yellow-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </nav>
            <button 
              className="md:hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-indigo-900 to-black z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {['Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-2xl uppercase tracking-wide hover:text-yellow-400 transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}

      <main>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/nebulawp.jpg')] bg-cover bg-center bg-fixed opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-300"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tighter">
              Achieve a <span className="text-yellow-400">Stellar</span> Online Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nebula Web designs and creates websites that help your business shine in the digital universe.
            </p>
            <Link 
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Launch Your Website</span>
              <Rocket className="h-5 w-5" />
            </Link>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#services" aria-label="Scroll to services">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </section>

        <section id="services" className="py-20 bg-pink-300/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Cosmic Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
                <Code className="h-12 w-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                <p>Custom-built websites that are as vast and unique as the cosmos itself.</p>
              </div>
              <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
                <Rocket className="h-12 w-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
                <p>Boost your site's speed to light-speed for an out-of-this-world user experience.</p>
              </div>
              <div className="bg-purple-900/50 p-6 rounded-lg backdrop-blur-sm">
                <Globe className="h-12 w-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-semibold mb-4">SEO Strategies</h3>
                <p>Navigate the vast expanse of search engines and land on the first page of results.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="flex p-16 gap-4">
                  <img 
                    src="/star.png" 
                    alt="Team working on web design" 
                    className="rounded-lg size-72"
                  />
                  <img 
                    src="/star.png" 
                    alt="Team working on web design" 
                    className="rounded-lg size-72"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl font-bold mb-6">About Nebula Web</h2>
                <p className="text-lg mb-6">
                  At Nebula Web, we're passionate about creating digital experiences that are as awe-inspiring as the cosmos. Our team of stellar designers and developers work tirelessly to ensure your business shines brightly in the vast digital universe.
                </p>
                <p className="text-lg">
                  With years of experience and a galaxy of satisfied clients, we're ready to take your online presence to new heights. Let's explore the possibilities together!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Stellar Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={`/placeholder.svg?height=300&width=400&text=Project ${item}`} 
                    alt={`Project ${item}`} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link 
                      href="#" 
                      className="bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="contact" className="py-20 bg-pink-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-2xl mx-auto bg-purple-900/50 p-8 rounded-lg backdrop-blur-sm">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 bg-white/10 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 bg-white/10 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-3 py-2 bg-white/10 border border-purple-500 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-200/75 py-8 text-purple-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Star className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-xl font-bold tracking-tight">Nebula Web</span>
            </div>
            <nav className="flex space-x-6">
              <Link href="#" className="text-sm hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-yellow-400 transition-colors">Terms of Service</Link>
            </nav>
          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Nebula Web. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}