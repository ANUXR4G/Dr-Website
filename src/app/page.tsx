"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Phone, MapPin } from "lucide-react"
import herologo from "../../public/image.png"

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-20 md:py-32"
      >
        <video
          src="/bg-video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
        />
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Your Health Is Our Priority !! Welcome To Dr. Anita Singh's Clinic
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
            564, Jaipuria Rd, Opposite Kanpur Central, Harris Ganj, Rail Bazar, Mirpur Cantonment, Mirpur, Kanpur, Uttar Pradesh 208004
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#c785ec] hover:bg-[#B19CD9]">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src={herologo}
              alt="Medical professionals"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </motion.section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[#EDE7F6] rounded-lg shadow-sm"
            >
              <Clock className="h-12 w-12 text-[#c785ec] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 4:00 PM - 8:00 PM
                <br />
                Sunday: 11:00 AM - 2:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-[#EDE7F6] rounded-lg shadow-sm"
            >
              <Phone className="h-12 w-12 text-[#c785ec] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Phone: (123) 456-7890
                <br />
                Email: info@healthcarepractice.com
                <br />
                Emergency: (123) 456-7899
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-[#EDE7F6] rounded-lg shadow-sm"
            >
              <MapPin className="h-12 w-12 text-[#c785ec] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Medical Center Drive
                <br />
                Suite 200
                <br />
                Anytown, ST 12345
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of medical services to meet your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Care",
                description:
                  "Comprehensive healthcare for patients of all ages, focusing on prevention, diagnosis, and treatment.",
                icon: "🩺",
              },
              {
                title: "Specialized Medicine",
                description:
                  "Expert care in various medical specialties to address specific health conditions and concerns.",
                icon: "🔬",
              },
              {
                title: "Preventive Care",
                description: "Proactive healthcare services designed to prevent illness and promote overall wellness.",
                icon: "💪",
              },
              {
                title: "Diagnostic Services",
                description: "Advanced diagnostic testing and imaging to accurately identify health issues.",
                icon: "📊",
              },
              {
                title: "Chronic Disease Management",
                description: "Ongoing care and support for patients with long-term health conditions.",
                icon: "❤️",
              },
              {
                title: "Telemedicine",
                description: "Virtual healthcare services for convenient consultations from the comfort of your home.",
                icon: "💻",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#EDE7F6] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="link" className="p-0 text-blue-600">
                  <Link href="/services">Learn More →</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0 }}
        animate={testimonialsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-[#c785ec] text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We're proud to have helped thousands of patients on their healthcare journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The doctors and staff are incredibly professional and caring. They took the time to listen to my concerns and provided excellent care.",
                name: "Sarah Johnson",
                role: "Patient since 2018",
              },
              {
                quote:
                  "I've never felt more comfortable with a medical practice. The entire team is knowledgeable, efficient, and genuinely cares about their patients.",
                name: "Michael Thompson",
                role: "Patient since 2020",
              },
              {
                quote:
                  "From the moment I walked in, I felt welcomed. The doctors explained everything clearly and made sure I understood my treatment plan.",
                name: "Emily Rodriguez",
                role: "Patient since 2019",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#ede7f6] text-gray-800 p-6 rounded-lg shadow-md"
              >
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        initial={{ opacity: 0 }}
        animate={ctaInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Take the Next Step?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to schedule an appointment or learn more about our services.
          </p>
          <Button asChild size="lg" className="bg-[#c785ec] hover:bg-[#B19CD9]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.section>
    </div>
  )
}