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
      id: "normal-c-section",
      title: "Normal / C-Section",
      description:
        "Childbirth can occur through two primary methods: Normal (Vaginal) Delivery and Cesarean (C-Section) Delivery. Both methods have their own benefits and risks, and the choice depends on medical conditions, complications, and personal preferences.",
      details: [
       "Shorter Recovery Time",
       "Lower Surgical Risks",
       "Future Pregnancy Benefits"
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "high-risk-pregnancies",
      title: "High-Risk Pregnancies",
      description: "A high-risk pregnancy is one in which the mother, baby, or both face an increased risk of health complications before, during, or after delivery. This condition may arise due to pre-existing health issues, pregnancy-related complications, or lifestyle factors. Proper medical care and monitoring are crucial to ensure a safe pregnancy and delivery.",
      details: ["Specialized Monitoring & Care ", "Lifestyle & Nutritional Support", "Delivery Planning & NICU Support"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "laparoscopic-ovarian-cystectomy",
      title: "Laparoscopic Ovarian Cystectomy",
      description: "Laparoscopic ovarian cystectomy is a minimally invasive surgical procedure used to remove cysts from the ovaries while preserving ovarian tissue. It is commonly performed when ovarian cysts cause pain, are large, or suspected to be abnormal. This technique involves small incisions through which a camera and surgical instruments are inserted, allowing precise removal with minimal damage.",
      details: [
        "Minimally Invasive Procedure",
        "Faster Recovery Time",
        "Reduced Risk of Complications",
        "Preservation of Fertility",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "hysteroscopy",
      title: "Hysteroscopy",
      description: "Hysteroscopy is a minimally invasive procedure used to examine and treat conditions inside the uterus. A thin, lighted tube called a hysteroscope is inserted through the vagina and cervix into the uterus to diagnose or perform surgical procedures. It is commonly used for detecting abnormal bleeding, fibroids, polyps, or fertility issues.",
      details: [
        "Minimally Invasive Procedure",
        "Quick Recovery",
        "Fertility Benefits",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "laparoscopic-myomectomy",
      title: "Laparoscopic Myomectomy",
      description: "Laparoscopic myomectomy is a minimally invasive surgical procedure used to remove uterine fibroids (myomas) while preserving the uterus. It is performed using small incisions through which a laparoscope (a thin, lighted camera) and surgical instruments are inserted. This procedure is commonly recommended for women experiencing symptoms like heavy menstrual bleeding, pelvic pain, or infertility due to fibroids.",
      details: [
        "Minimally Invasive Procedure",
        "Preserves Uterine Function",
        "Faster Recovery",
        "Effective Treatment for Fibroids",
        "Lower Risk of Complications",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "laparoscopic-hysterectomy",
      title: "Laparoscopic Hysterectomy",
      description: "Laparoscopic hysterectomy is a minimally invasive surgical procedure used to remove the uterus through small incisions in the abdomen. A laparoscope (a thin, lighted camera) and surgical instruments are inserted to perform the surgery, reducing recovery time and post-operative pain compared to traditional open surgery. It is performed to treat fibroids, endometriosis, uterine prolapse, chronic pelvic pain, or cancer.",
      details: [
        "Minimally Invasive Approach",
        "Faster Recovery",
        "Indications for Surgery",
        "Reduced Blood Loss & Complications",
        "Better Quality of Life",
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
          <Tabs defaultValue="normal-c-section" className="w-full">
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
    </div>
  )
}

