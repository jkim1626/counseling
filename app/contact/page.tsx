"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Mail, Phone, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentGrade: "",
    targetSchools: "",
    message: "",
    agreeToContact: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        studentGrade: "",
        targetSchools: "",
        message: "",
        agreeToContact: false,
      })
      setSubmitted(false)
    }, 3000)
  }

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
            <Link href="/team" className="text-gray-700 hover:text-blue-900 transition">
              Team
            </Link>
            <Button className="bg-blue-900 hover:bg-blue-800">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="w-full">
        {/* Contact Hero */}
        <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6 text-balance">Let's Get Started</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-pretty">
              Schedule your free consultation today and take the first step toward achieving your college dreams.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
                <Mail className="w-8 h-8 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Email</h3>
                  <a href="mailto:info@collegepathways.com" className="text-gray-700 hover:text-blue-900 transition">
                    info@collegepathways.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Phone</h3>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-blue-900 transition">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-gold-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Hours</h3>
                  <p className="text-gray-700">Mon-Fri: 9am-6pm EDT</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h2>
                <p className="text-green-700 mb-4">
                  We've received your inquiry and will be in touch shortly to schedule your free consultation.
                </p>
                <p className="text-sm text-green-600">Redirecting in a moment...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Schedule Your Consultation</h2>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Student Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Current Grade/Status *</label>
                    <select
                      name="studentGrade"
                      value={formData.studentGrade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select an option</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                      <option value="gap-year">Gap Year</option>
                      <option value="transfer">Transfer Student</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Target Schools</label>
                    <input
                      type="text"
                      name="targetSchools"
                      value={formData.targetSchools}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition"
                      placeholder="e.g., Harvard, MIT, Stanford"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about your goals</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Share your college aspirations, concerns, or any specific areas where you'd like support..."
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="mb-8">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="agreeToContact"
                      checked={formData.agreeToContact}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 rounded border-gray-300 text-gold-500 focus:ring-gold-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to be contacted by College Pathways to discuss my college goals. *
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold"
                >
                  Schedule Free Consultation
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  We'll respond within 24 hours to confirm your consultation appointment.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">How much does a consultation cost?</h3>
                <p className="text-gray-700 text-pretty">
                  Your initial consultation is completely free! This gives us an opportunity to understand your goals
                  and show you how we can help. From there, you can choose from our various service packages based on
                  your needs.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  When should I start working with a counselor?
                </h3>
                <p className="text-gray-700 text-pretty">
                  It's never too early to start! We recommend beginning in 9th or 10th grade to build a strong
                  foundation. However, we also work with students in 11th or 12th grade, transfer students, and gap year
                  students.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Do you offer virtual consultations?</h3>
                <p className="text-gray-700 text-pretty">
                  Yes! All of our consultations can be conducted virtually via video conference, phone, or email. This
                  makes it convenient for students and families regardless of location.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Can you help with transfer applications?</h3>
                <p className="text-gray-700 text-pretty">
                  We specialize in transfer student services and understand the unique challenges transfer students
                  face. Our counselors have extensive experience helping transfer students get into top schools.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  What if I'm interested in international schools?
                </h3>
                <p className="text-gray-700 text-pretty">
                  We have experience helping students apply to international universities, particularly in the UK and
                  Canada. Contact us to discuss your specific international college goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your College Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Don't wait—schedule your free consultation today and let's start working toward your college dreams.
            </p>
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-blue-900 font-semibold">
              Schedule Now
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
                    <Link href="/team" className="hover:text-white transition">
                      Team
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
