"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 py-20"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our Practice</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Learn about our mission, our team, and our commitment to providing exceptional healthcare.
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Our medical practice"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2005, HealthCare Medical Practice was established with a simple yet powerful vision: to
                provide compassionate, comprehensive healthcare to our community.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What began as a small practice with just two physicians has grown into a trusted healthcare provider
                with a team of specialists dedicated to improving the health and wellbeing of our patients.
              </p>
              <p className="text-lg text-gray-700">
                Throughout our growth, we've remained committed to our founding principles: treating each patient with
                dignity and respect, staying at the forefront of medical advancements, and fostering a warm, welcoming
                environment for all who walk through our doors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <motion.section
        ref={missionRef}
        initial={{ opacity: 0 }}
        animate={missionInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are dedicated to providing exceptional, patient-centered healthcare with compassion and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Centered Care",
                description:
                  "We put our patients at the center of everything we do, tailoring our care to meet individual needs and preferences.",
                icon: "❤️",
              },
              {
                title: "Excellence in Healthcare",
                description:
                  "We strive for excellence in all aspects of healthcare, from preventive services to specialized treatments.",
                icon: "🏆",
              },
              {
                title: "Community Wellness",
                description:
                  "We are committed to improving the health and wellbeing of our community through education and outreach.",
                icon: "🌱",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0 }}
        animate={teamInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team of experienced healthcare professionals is dedicated to providing you with the highest quality
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                bio: "Dr. Johnson has over 15 years of experience in family medicine and leads our medical team with compassion and expertise.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Michael Chen",
                role: "Internal Medicine Specialist",
                bio: "Specializing in internal medicine, Dr. Chen is dedicated to diagnosing and treating a wide range of adult health conditions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatrician",
                bio: "With a gentle approach and extensive training, Dr. Rodriguez provides exceptional care for our youngest patients.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. James Wilson",
                role: "Cardiologist",
                bio: "Dr. Wilson brings cutting-edge cardiac care to our practice, with a focus on prevention and management of heart conditions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Lisa Thompson",
                role: "Dermatologist",
                bio: "Specializing in skin health, Dr. Thompson provides comprehensive dermatological services for patients of all ages.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Robert Kim",
                role: "Orthopedic Specialist",
                bio: "Dr. Kim specializes in diagnosing and treating conditions affecting the musculoskeletal system, helping patients regain mobility and reduce pain.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        ref={valuesRef}
        initial={{ opacity: 0 }}
        animate={valuesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="py-16 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              These principles guide everything we do at HealthCare Medical Practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Compassion",
                description:
                  "We approach every patient interaction with empathy and understanding, recognizing that each person's healthcare journey is unique.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of our practice, from medical care to patient service, continuously improving our skills and knowledge.",
              },
              {
                title: "Integrity",
                description:
                  "We act with honesty and transparency in all our dealings, building trust with our patients and within our community.",
              },
              {
                title: "Respect",
                description:
                  "We treat every individual with dignity and respect, valuing diversity and creating an inclusive environment for all.",
              },
              {
                title: "Collaboration",
                description:
                  "We work together as a team and partner with our patients to achieve the best possible health outcomes.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace advancements in medical science and technology to provide cutting-edge care while maintaining a personal touch.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

