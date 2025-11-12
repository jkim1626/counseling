"use client"

import Link from "next/link"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const counselors = [
  {
    name: "Dr. Patricia Wong",
    title: "Founder & Lead Counselor",
    bio: "With 20+ years of experience in college admissions and education, Dr. Wong has helped over 1,000 students achieve their college dreams. She holds a Ph.D. in Education and has worked with students from diverse backgrounds.",
    specialty: "Holistic college strategy, Ivy League preparation",
    credentials: "Ph.D. Education, Former Admissions Officer (MIT)",
    image: "1",
  },
  {
    name: "James Martinez",
    title: "Senior Counselor",
    bio: "James brings 15 years of high school counseling experience to the team. He specializes in helping first-generation college students navigate the application process and secure financial aid.",
    specialty: "First-generation students, Financial aid planning",
    credentials: "M.S. Counseling, Certified Educational Planner",
    image: "2",
  },
  {
    name: "Sophie Chen",
    title: "Essay & Writing Coach",
    bio: "Sophie is a published author and editor with a passion for helping students find their voice. She has guided hundreds of students in crafting compelling personal statements and supplemental essays.",
    specialty: "Essay writing, Storytelling, Creative expression",
    credentials: "M.F.A. Creative Writing, Published Author",
    image: "3",
  },
  {
    name: "Michael Thompson",
    title: "Test Prep & Academic Strategist",
    bio: "Michael specializes in helping students maximize their test scores while maintaining balance. He has developed proprietary test strategy methods that have helped students improve their scores significantly.",
    specialty: "SAT/ACT strategy, Test anxiety management",
    credentials: "M.A. Education, Licensed Test Prep Specialist",
    image: "4",
  },
]

const milestones = [
  {
    number: "20+",
    label: "Years of combined experience",
  },
  {
    number: "2,500+",
    label: "Students successfully advised",
  },
  {
    number: "98%",
    label: "College acceptance rate",
  },
  {
    number: "$500M+",
    label: "In financial aid secured",
  },
]

export default function Team() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            College Pathways
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/services" className="text-gray-700 hover:text-blue-900 transition">
              Services
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
        {/* Team Hero */}
        <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6 text-balance">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-pretty">
              Experienced college counselors dedicated to helping you achieve your educational goals.
            </p>
          </div>
        </section>

        {/* Milestones */}
        <section className="w-full py-16 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-gold-500 mb-2">{milestone.number}</div>
                  <p className="text-gray-700 text-sm">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Counselor Profiles */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Expert Counselors</h2>
            <div className="space-y-16">
              {counselors.map((counselor, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg h-80 flex items-center justify-center shadow-lg">
                      <div className="w-full h-full bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center text-5xl font-bold text-blue-900">
                        {counselor.image}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">{counselor.name}</h3>
                    <p className="text-gold-500 font-semibold text-lg mb-4">{counselor.title}</p>
                    <p className="text-gray-700 leading-relaxed mb-6 text-pretty">{counselor.bio}</p>
                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-600">SPECIALTY</p>
                        <p className="text-gray-800">{counselor.specialty}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600">CREDENTIALS</p>
                        <p className="text-gray-800">{counselor.credentials}</p>
                      </div>
                    </div>
                    <Button className="bg-blue-900 hover:bg-blue-800">
                      <Link href="/contact" className="flex items-center gap-2">
                        Connect with {counselor.name.split(" ")[0]} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why Choose College Pathways?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold-500 text-blue-900">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Highly Qualified Counselors</h3>
                  <p className="text-gray-700 text-pretty">
                    Our team consists of former admissions officers, published authors, and education experts with
                    decades of combined experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold-500 text-blue-900">
                    <BookOpen className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-700 text-pretty">
                    We understand that every student is unique. We develop customized strategies that align with your
                    strengths, goals, and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold-500 text-blue-900">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-700 text-pretty">
                    With a 98% acceptance rate and over 2,500 students advised, we have a proven track record of success
                    across all academic levels.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gold-500 text-blue-900">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Comprehensive Support</h3>
                  <p className="text-gray-700 text-pretty">
                    From essay writing to interview prep and financial aid guidance, we support you throughout your
                    entire college journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
              College Pathways was founded with a simple mission: to make college counseling accessible and effective
              for all students, regardless of their background or circumstances.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-pretty">
              We believe that every student deserves expert guidance to navigate the complex college admissions process.
              Our team of experienced counselors has spent decades helping students from all backgrounds achieve their
              college dreams—whether they're first-generation students, athletes, international students, or transfer
              students.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-pretty">
              Today, we're proud to have helped thousands of students gain admission to their dream schools, secure
              significant financial aid, and launch successful academic careers. We're committed to continuing this
              mission and supporting the next generation of college-bound students.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Get Connected with Our Team</h2>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Schedule a free consultation to meet our counselors and discover how we can help you achieve your college
              goals.
            </p>
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-semibold">
              <Link href="/contact" className="flex items-center gap-2">
                Schedule Free Consultation <ArrowRight className="w-4 h-4" />
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
                    <Link href="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition">
                      Services
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
