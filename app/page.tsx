'use client';

import { useState } from 'react';

type Tab = 'about' | 'credentials' | 'connect' | 'testimonies';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-blue-900">Elite College Counseling</h1>
              <p className="text-sm text-gray-600 mt-1">Your Path to Top Universities</p>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex space-x-1 border-t border-gray-200 pt-4 pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'about'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab('credentials')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'credentials'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Credentials
            </button>
            <button
              onClick={() => setActiveTab('connect')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'connect'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Connect with Us
            </button>
            <button
              onClick={() => setActiveTab('testimonies')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'testimonies'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Testimonies
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Us Section */}
        {activeTab === 'about' && (
          <div className="animate-fadeIn">
            <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Welcome to Elite College Counseling, where excellence meets opportunity. We are a dedicated team of 
                  experienced educators and college counselors committed to helping students achieve their dreams of 
                  attending the nation&apos;s top universities.
                </p>
                <p>
                  With years of combined experience in college admissions, test preparation, and academic tutoring, 
                  our team has helped hundreds of students gain acceptance to Ivy League schools, MIT, Stanford, 
                  and other prestigious institutions.
                </p>
                <p>
                  We understand that the college application process can be overwhelming. That&apos;s why we provide 
                  personalized, comprehensive support every step of the way—from course selection and extracurricular 
                  planning to essay writing and interview preparation.
                </p>
              </div>
              
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700 font-semibold">Students Mentored</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-700 font-semibold">Top-25 Acceptance Rate</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-700 font-semibold">Years Experience</div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Approach</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-3xl mr-3">📚</span>
                    Personalized Guidance
                  </h4>
                  <p className="text-blue-100">
                    Every student is unique. We create customized plans that highlight your strengths and address 
                    your specific needs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Strategic Planning
                  </h4>
                  <p className="text-blue-100">
                    We help you build a compelling application profile that stands out to admissions committees.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-3xl mr-3">✨</span>
                    Expert Mentorship
                  </h4>
                  <p className="text-blue-100">
                    Our counselors are former admissions officers and educators from top universities.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="text-3xl mr-3">🚀</span>
                    Proven Results
                  </h4>
                  <p className="text-blue-100">
                    Our track record speaks for itself with consistent acceptances to top-tier institutions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Credentials Section */}
        {activeTab === 'credentials' && (
          <div className="animate-fadeIn">
            <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Credentials</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Educational Background</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Counselors with degrees from Harvard, Yale, Princeton, Stanford, and MIT</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Advanced degrees in Education, Psychology, and subject-specific fields</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Certified test prep specialists for SAT, ACT, and AP examinations</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-indigo-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Experience</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Former admissions officers from top-25 universities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Published authors and recognized education consultants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Members of NACAC (National Association for College Admission Counseling)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>15+ years of combined experience in college counseling</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Student Success</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Students accepted to all 8 Ivy League schools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Average SAT score improvement of 200+ points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>95% acceptance rate to students&apos; top-choice schools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Over $50M in merit scholarships awarded to our students</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-xl mt-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized Services</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>SAT/ACT Test Preparation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>AP & IB Subject Tutoring</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>College Essay Writing</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Interview Preparation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Extracurricular Planning</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✓</span>
                      <span>Financial Aid Guidance</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Connect with Us Section */}
        {activeTab === 'connect' && (
          <div className="animate-fadeIn">
            <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Connect with Us</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to start your journey to a top university? We&apos;d love to hear from you. 
                Schedule a free consultation to discuss how we can help you achieve your academic goals.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">📧</span>
                    Email Us
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For general inquiries:
                  </p>
                  <a href="mailto:info@elitecollegecounseling.com" className="text-blue-600 font-semibold hover:underline">
                    info@elitecollegecounseling.com
                  </a>
                  <p className="text-gray-700 mt-4 mb-2">
                    For admissions consultations:
                  </p>
                  <a href="mailto:admissions@elitecollegecounseling.com" className="text-blue-600 font-semibold hover:underline">
                    admissions@elitecollegecounseling.com
                  </a>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-3xl mr-3">📞</span>
                    Call Us
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Office hours: Mon-Fri, 9AM-6PM EST
                  </p>
                  <p className="text-2xl font-bold text-indigo-600 mb-4">
                    (555) 123-4567
                  </p>
                  <p className="text-gray-700 mb-2">
                    Weekend consultations available by appointment
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-xl text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">Schedule a Free Consultation</h3>
                <p className="mb-6">
                  Meet with one of our expert counselors to discuss your goals and learn how we can help you succeed.
                </p>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Student Name"
                      className="px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
                    />
                    <input
                      type="text"
                      placeholder="Parent Name"
                      className="px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white">
                      <option>Grade Level</option>
                      <option>9th Grade</option>
                      <option>10th Grade</option>
                      <option>11th Grade</option>
                      <option>12th Grade</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your goals and interests..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Request Free Consultation
                  </button>
                </form>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-3">🏢</div>
                  <h4 className="font-bold text-gray-800 mb-2">Office Location</h4>
                  <p className="text-gray-600 text-sm">
                    123 Education Drive<br />
                    Suite 456<br />
                    Boston, MA 02108
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-3">💬</div>
                  <h4 className="font-bold text-gray-800 mb-2">Social Media</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-blue-600 hover:underline cursor-pointer">Facebook</p>
                    <p className="text-blue-600 hover:underline cursor-pointer">Instagram</p>
                    <p className="text-blue-600 hover:underline cursor-pointer">LinkedIn</p>
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-3">📅</div>
                  <h4 className="font-bold text-gray-800 mb-2">Virtual Sessions</h4>
                  <p className="text-gray-600 text-sm">
                    Available worldwide via Zoom, Google Meet, or phone
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Testimonies Section */}
        {activeTab === 'testimonies' && (
          <div className="animate-fadeIn">
            <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Student & Parent Testimonies</h2>
              <p className="text-lg text-gray-700 mb-10">
                Hear from the students and families who have achieved their dreams with our guidance.
              </p>

              <div className="space-y-6">
                {/* Testimony 1 */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border-l-4 border-blue-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      S
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Sarah Chen</h3>
                      <p className="text-gray-600 text-sm">Harvard University, Class of 2027</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;The counselors at Elite College Counseling transformed my college application journey. 
                    They helped me identify my unique strengths and craft a compelling narrative that 
                    truly represented who I am. Their essay guidance was invaluable, and their support 
                    during the stressful application season kept me motivated. I couldn&apos;t have gotten 
                    into Harvard without their expertise!&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>

                {/* Testimony 2 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border-l-4 border-purple-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      M
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Mrs. Johnson</h3>
                      <p className="text-gray-600 text-sm">Parent of MIT Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;As a parent, watching your child navigate the college process can be overwhelming. 
                    Elite College Counseling provided not just excellent guidance for my son, but also 
                    peace of mind for our entire family. They were responsive, knowledgeable, and truly 
                    cared about my son&apos;s success. He&apos;s now thriving at MIT, and we&apos;re grateful for the 
                    foundation they helped build.&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>

                {/* Testimony 3 */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl border-l-4 border-green-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      A
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Alex Rodriguez</h3>
                      <p className="text-gray-600 text-sm">Stanford University, Class of 2026</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;I started working with Elite College Counseling during my sophomore year. 
                    Their strategic planning helped me choose the right courses, pursue meaningful 
                    extracurriculars, and prepare for standardized tests. My SAT score improved by 
                    280 points! Their holistic approach made all the difference. Thank you for helping 
                    me achieve my dream of attending Stanford!&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>

                {/* Testimony 4 */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border-l-4 border-amber-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      E
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Emily Watson</h3>
                      <p className="text-gray-600 text-sm">Yale University, Class of 2028</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;The personalized attention I received was incredible. My counselor took the time 
                    to understand my passions and helped me showcase them effectively in my applications. 
                    The mock interviews prepared me perfectly for the real thing. I was accepted to Yale, 
                    Princeton, and Columbia – I truly couldn&apos;t have done it without their expert guidance 
                    and encouragement!&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>

                {/* Testimony 5 */}
                <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 rounded-xl border-l-4 border-red-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      D
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">Mr. & Mrs. Patel</h3>
                      <p className="text-gray-600 text-sm">Parents of Princeton Student</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;Our daughter worked with Elite College Counseling for two years, and the results 
                    exceeded our expectations. They provided structure, expertise, and genuine care 
                    throughout the entire process. The investment was worth every penny – our daughter 
                    received a merit scholarship to Princeton and is pursuing her dream of studying 
                    engineering. We recommend them to all our friends!&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>

                {/* Testimony 6 */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border-l-4 border-cyan-600">
                  <div className="flex items-start mb-4">
                    <div className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      J
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">James Kim</h3>
                      <p className="text-gray-600 text-sm">Duke University, Class of 2027</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &quot;I was struggling with my college essays and felt lost in the application process. 
                    Elite College Counseling not only helped me write compelling essays but also taught 
                    me valuable skills in self-reflection and storytelling. Their test prep program 
                    boosted my ACT score from a 28 to a 34. I&apos;m now at Duke studying computer science, 
                    living my dream!&quot;
                  </p>
                  <div className="mt-4 text-yellow-500 text-xl">★★★★★</div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Success Stories</h3>
                <p className="text-lg mb-6">
                  Start your journey to a top university today. Schedule a free consultation to learn 
                  how we can help you achieve your academic goals.
                </p>
                <button
                  onClick={() => setActiveTab('connect')}
                  className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started Now
                </button>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elite College Counseling</h3>
              <p className="text-gray-400">
                Empowering students to reach their full potential and gain admission to top universities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => setActiveTab('about')} className="block text-gray-400 hover:text-white">
                  About Us
                </button>
                <button onClick={() => setActiveTab('credentials')} className="block text-gray-400 hover:text-white">
                  Credentials
                </button>
                <button onClick={() => setActiveTab('connect')} className="block text-gray-400 hover:text-white">
                  Connect with Us
                </button>
                <button onClick={() => setActiveTab('testimonies')} className="block text-gray-400 hover:text-white">
                  Testimonies
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@elitecollegecounseling.com</p>
                <p>📞 (555) 123-4567</p>
                <p>🏢 Boston, MA 02108</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elite College Counseling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
