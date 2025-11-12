"use client"

import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "The guidance I received was transformative. I got into my dream school!",
    author: "Sarah Chen",
    school: "Harvard University",
  },
  {
    quote: "Expert advice on essay writing made all the difference in my applications.",
    author: "Marcus Johnson",
    school: "Stanford University",
  },
  {
    quote: "As a transfer student, I felt supported every step of the way.",
    author: "Elena Rodriguez",
    school: "UCLA",
  },
  {
    quote: "The strategic approach to college selection was invaluable.",
    author: "David Kim",
    school: "MIT",
  },
]

const collegeLogs = [
  { name: "Harvard", color: "from-red-600 to-red-800" },
  { name: "Stanford", color: "from-red-600 to-gray-800" },
  { name: "MIT", color: "from-red-700 to-gray-900" },
  { name: "Yale", color: "from-blue-900 to-blue-950" },
  { name: "Princeton", color: "from-orange-600 to-orange-800" },
  { name: "Columbia", color: "from-blue-700 to-blue-900" },
  { name: "UPenn", color: "from-red-700 to-blue-700" },
  { name: "Duke", color: "from-blue-700 to-gray-900" },
  { name: "UCLA", color: "from-blue-600 to-gold-500" },
  { name: "Berkeley", color: "from-blue-700 to-gold-500" },
]

const services = [
  "Essay brainstorming & review",
  "College list building",
  "Application strategy",
  "Interview preparation",
  "Test planning (SAT/ACT)",
  "Financial aid guidance",
  "Transfer student services",
  "Recommendation letters",
]

export default function Home() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">College Pathways</div>
          <div className="flex gap-6 items-center">
            <Link href="/services" className="text-gray-700 hover:text-blue-900 transition">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-900 transition">
              Team
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition">
              Contact
            </Link>
            <Button className="bg-blue-900 hover:bg-blue-800">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-screen bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between py-20">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                Your Path to College Starts Here
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed text-pretty">
                Expert guidance from experienced college counselors dedicated to helping high school and transfer
                students achieve their educational dreams.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-semibold">
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="flex-1 hidden lg:flex justify-center items-center">
              <div className="w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg shadow-2xl flex items-center justify-center">
                <img
                  src="/students-graduation-celebration.jpg"
                  alt="Students celebrating graduation"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <p className="text-gray-700 font-semibold">Students Accepted</p>
                <p className="text-gray-600 text-sm mt-2">To top universities nationwide</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
                <p className="text-gray-700 font-semibold">Success Rate</p>
                <p className="text-gray-600 text-sm mt-2">Students admitted to their first-choice schools</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
                <p className="text-gray-700 font-semibold">Partner Colleges</p>
                <p className="text-gray-600 text-sm mt-2">Top universities we have established relationships with</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Comprehensive Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition border-l-4 border-gold-500"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-800 font-medium">{service}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                  View All Services <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic text-pretty">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-blue-900">{testimonial.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* College Logo Wall */}
        <section className="w-full py-20 bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Students Get Into Top Universities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {collegeLogs.map((college, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${college.color} rounded-lg h-32 flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105`}
                >
                  <p className="text-white font-bold text-center text-lg">{college.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Achieve Your College Dreams?</h2>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Schedule a free consultation with one of our experienced college counselors today.
            </p>
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-semibold">
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Your Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">College Pathways</h3>
                <p className="text-sm text-gray-400">Helping students achieve their college dreams.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="hover:text-white transition">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Essay Review
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Interview Prep
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Transfer Advising
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>Email: info@collegepathways.com</li>
                  <li>Phone: (555) 123-4567</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 College Pathways. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
