"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: "primary-care",
      title: "Primary Care",
      description:
        "Comprehensive healthcare for patients of all ages, focusing on prevention, diagnosis, and treatment of common illnesses and chronic conditions.",
      details: [
        "Annual physical examinations",
        "Preventive screenings",
        "Immunizations",
        "Management of chronic conditions",
        "Acute illness treatment",
        "Health education and counseling",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "specialized-medicine",
      title: "Specialized Medicine",
      description: "Expert care in various medical specialties to address specific health conditions and concerns.",
      details: ["Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Neurology", "Orthopedics"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "preventive-care",
      title: "Preventive Care",
      description: "Proactive healthcare services designed to prevent illness and promote overall wellness.",
      details: [
        "Wellness examinations",
        "Health risk assessments",
        "Lifestyle counseling",
        "Nutritional guidance",
        "Stress management",
        "Smoking cessation programs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "diagnostic-services",
      title: "Diagnostic Services",
      description: "Advanced diagnostic testing and imaging to accurately identify health issues.",
      details: [
        "Laboratory testing",
        "X-rays",
        "Ultrasound",
        "Electrocardiogram (ECG/EKG)",
        "Spirometry",
        "Allergy testing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "chronic-disease-management",
      title: "Chronic Disease Management",
      description: "Ongoing care and support for patients with long-term health conditions.",
      details: [
        "Diabetes management",
        "Hypertension control",
        "Asthma and COPD care",
        "Arthritis treatment",
        "Heart disease management",
        "Thyroid disorder treatment",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "telemedicine",
      title: "Telemedicine",
      description: "Virtual healthcare services for convenient consultations from the comfort of your home.",
      details: [
        "Video consultations",
        "Follow-up appointments",
        "Prescription refills",
        "Minor illness treatment",
        "Chronic condition monitoring",
        "Mental health check-ins",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="bg-[#f694bc] py-20"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive range of healthcare services designed to meet your needs at every stage of life.
          </p>
        </div>
      </motion.section>

      {/* Services Tabs */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="primary-care" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-[#f694bc] p-1 rounded-lg">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="data-[state=active]:bg-[#f34887] data-[state=active]:text-white"//-
                  className="text-white data-[state=active]:bg-[#f34887] data-[state=active]:text-white"//+
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Offer:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                          <span className="text-gray-700">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <Button asChild className="mt-4">
                      <Link href="/contact">Schedule an Appointment</Link>
                    </Button>
                  </div>
                  <div className="lg:w-1/2">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond our core offerings, we provide these specialized services to support your health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Health",
                description: "Comprehensive care addressing the unique health needs of women at every stage of life.",
                icon: "👩‍⚕️",
              },
              {
                title: "Men's Health",
                description: "Specialized care focused on the specific health concerns and preventive needs of men.",
                icon: "👨‍⚕️",
              },
              {
                title: "Pediatric Care",
                description: "Gentle, thorough healthcare for children from infancy through adolescence.",
                icon: "👶",
              },
              {
                title: "Geriatric Medicine",
                description:
                  "Specialized care for older adults, focusing on quality of life and managing age-related conditions.",
                icon: "🧓",
              },
              {
                title: "Mental Health Services",
                description: "Supportive care for emotional wellbeing, including counseling and medication management.",
                icon: "🧠",
              },
              {
                title: "Nutrition Counseling",
                description:
                  "Personalized guidance on diet and nutrition to support overall health and manage specific conditions.",
                icon: "🥗",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild variant="link" className="p-0 text-blue-600">
                  <Link href="/contact">Learn More →</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Insurance & Payment Options</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We accept most major insurance plans and offer various payment options to make healthcare accessible
                  to all our patients.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">We Accept:</h3>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    "Medicare",
                    "Medicaid",
                    "Blue Cross Blue Shield",
                    "Aetna",
                    "Cigna",
                    "UnitedHealthcare",
                    "Humana",
                    "Kaiser Permanente",
                  ].map((insurance, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                      <span className="text-gray-700">{insurance}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700">
                  For patients without insurance, we offer self-pay options and payment plans. Please contact our office
                  for more information.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
                  <h3 className="text-xl font-semibold text-center mb-4">Have Questions?</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Our billing specialists are here to help you understand your coverage and options.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Care?</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule an appointment today and take the first step toward better health.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

