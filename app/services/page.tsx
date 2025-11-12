"use client"

import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Clock, DollarSign, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Essay Brainstorming & Review",
    description:
      "Develop compelling college essays that stand out. Our counselors help you brainstorm authentic stories, refine your writing, and craft narratives that showcase your unique voice and experiences.",
    icon: BookOpen,
    features: [
      "Brainstorming sessions",
      "Multiple revision rounds",
      "Professional feedback",
      "Personal statement guidance",
    ],
    price: "Starting at $299",
  },
  {
    title: "College List Building",
    description:
      "Strategic college selection based on your academics, interests, and goals. We help you identify reach, target, and safety schools that align with your future aspirations.",
    icon: Target,
    features: [
      "Academic profile analysis",
      "Interest-based matching",
      "Financial aid analysis",
      "Career path alignment",
    ],
    price: "Starting at $199",
  },
  {
    title: "Application Strategy",
    description:
      "Navigate the complex application process with confidence. From choosing schools to managing deadlines, we provide a comprehensive roadmap for success.",
    icon: Lightbulb,
    features: ["Timeline planning", "Application optimization", "Early decision guidance", "Multi-school coordination"],
    price: "Starting at $399",
  },
  {
    title: "Interview Preparation",
    description:
      "Master the art of the college interview. We conduct mock interviews and provide feedback to help you present your best self confidently.",
    icon: Users,
    features: ["Mock interviews", "Question preparation", "Confidence building", "School-specific preparation"],
    price: "Starting at $249",
  },
  {
    title: "Test Planning & Prep Guidance",
    description:
      "Develop a personalized test strategy for the SAT or ACT. We help you understand which test suits you best and create a preparation timeline.",
    icon: Clock,
    features: ["Test selection guidance", "Timeline creation", "Tutor recommendations", "Practice strategy"],
    price: "Starting at $149",
  },
  {
    title: "Financial Aid Guidance",
    description:
      "Navigate financial aid options including FAFSA, CSS Profile, and scholarships. We help maximize your aid and understand your financial obligations.",
    icon: DollarSign,
    features: ["FAFSA assistance", "CSS Profile support", "Scholarship research", "Cost analysis"],
    price: "Starting at $199",
  },
]

const packages = [
  {
    name: "Express",
    duration: "3 months",
    price: "$1,299",
    features: [
      "5 counseling sessions",
      "Essay review (1 essay)",
      "College list (20 schools)",
      "Application strategy",
      "Email support",
    ],
  },
  {
    name: "Standard",
    duration: "6 months",
    price: "$2,499",
    features: [
      "10 counseling sessions",
      "Essay review & brainstorming",
      "Comprehensive college list",
      "Full application strategy",
      "Interview prep (3 mocks)",
      "Financial aid guidance",
      "Priority support",
    ],
  },
  {
    name: "Premium",
    duration: "12 months",
    price: "$4,999",
    features: [
      "Unlimited counseling sessions",
      "Complete essay package",
      "Detailed college research",
      "Ongoing application support",
      "Unlimited interview prep",
      "Financial aid planning",
      "Transfer student support",
      "24/7 VIP support",
    ],
  },
]

export default function Services() {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            College Pathways
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Home
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
        {/* Services Hero */}
        <section className="w-full py-20 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-white mb-6 text-balance">Our Comprehensive Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto text-pretty">
              From essay writing to financial aid planning, we offer a full range of college counseling services
              tailored to your needs.
            </p>
          </div>
        </section>

        {/* Individual Services */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, idx) => {
                const IconComponent = service.icon
                return (
                  <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gold-500 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                        <p className="text-gold-500 font-semibold mt-1">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-pretty">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section className="w-full py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Counseling Packages</h2>
            <p className="text-center text-gray-700 mb-12 text-pretty">
              Choose the package that works best for your timeline and needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg p-8 transition ${
                    idx === 1
                      ? "bg-blue-900 text-white shadow-xl scale-105"
                      : "bg-white border border-gray-200 hover:shadow-lg"
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? "text-gold-400" : "text-blue-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-4 ${idx === 1 ? "text-blue-100" : "text-gray-600"}`}>{pkg.duration}</p>
                  <div className={`text-3xl font-bold mb-6 ${idx === 1 ? "text-white" : "text-blue-900"}`}>
                    {pkg.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2">
                        <span className={`text-lg ${idx === 1 ? "text-gold-400" : "text-gold-500"}`}>✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className={`w-full ${
                      idx === 1
                        ? "bg-gold-500 hover:bg-gold-600 text-blue-900"
                        : "bg-blue-900 hover:bg-blue-800 text-white"
                    }`}
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Transfer Student Services</h3>
                <p className="text-gray-700 mb-4 text-pretty">
                  Navigating transfer applications requires a different strategy. We specialize in helping transfer
                  students identify target schools, craft compelling transfer essays, and navigate the transfer-specific
                  application process.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Recommendation Letter Guidance</h3>
                <p className="text-gray-700 mb-4 text-pretty">
                  Strong recommendation letters can make a huge difference. We guide students in selecting teachers and
                  counselors, prepare talking points, and help craft thoughtful invitation letters that make a
                  compelling case.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">School-Specific Sessions</h3>
                <p className="text-gray-700 mb-4 text-pretty">
                  Get school-specific preparation for your dream schools. We help you understand what each school values
                  and how to position your application to maximize your chances of admission.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Group Workshops</h3>
                <p className="text-gray-700 mb-4 text-pretty">
                  Looking for affordable options? Join our group workshops on essay writing, test prep, financial aid,
                  and more. Perfect for students who want expert guidance at an accessible price point.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 text-pretty">
              Schedule a free consultation to discuss which services are right for you.
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
