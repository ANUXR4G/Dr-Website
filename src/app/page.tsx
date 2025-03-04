"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock, Phone, MapPin } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";

export default function Home() {

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fix: Properly initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => {
        emblaApi.scrollNext();
      };
      
      const interval = setInterval(autoplay, 5000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={img1} className="object-cover h-full w-full" alt="Image1" />
          </div>
          <div className="embla__slide">
            <Image src={img2} className="object-cover h-full w-full" alt="Image2" />
          </div>
          <div className="embla__slide">
            <Image src={img3} className="object-cover h-full w-full" alt="Image3" />
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-[#FF94BC] rounded-lg shadow-sm"
            >
              <Clock className="h-12 w-12 text-[#f34887] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p className="text-white">
                Monday - Saturday: 4:00 PM - 8:00 PM
                <br />
                Sunday: 11:00 AM - 2:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-[#FF94BC] rounded-lg shadow-sm"
            >
              <MapPin className="h-12 w-12 text-[#f34887] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-white">
              564, Jaipuria Rd, Opposite Kanpur Central, Harris Ganj, Rail Bazar, Mirpur Cantonment, Mirpur, Kanpur, Uttar Pradesh 208004
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a Gynecologist, we deal with reproductive care of women all through from getting your body prepared to delivery of a healthy child. We also handhold you post your pregnancy.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Normal / C-Section",
                description:
               " Our C-section recovery tips will help your uterus to encourage it to contract and shrink to its normal size..",
                icon: "🩺",
              },
              {
                title: "High risk pregnancies",
                description:
                  "A high-risk pregnancy means a woman has one or more things that raise her — or her baby's — chances for health problems...",
                icon: "🔬",
              },
              {
                title: "laparoscopic ovarian cystectomy",
                description: "In laparoscopic method, only the ovarian cyst is removed by preserving the ovarian tissue or ovaries.",
                icon: "💪",
              },
              {
                title: "Hysteroscopy",
                description: "Hysteroscopy is one of the tests a fertility doctor may prescribe to evaluate the possible causes of infertility.",
                icon: "📊",
              },
              {
                title: "laparoscopic myomectomy",
                description: "Myomectomy can be performed either by key hole approach or by open abdominal approach.",
                icon: "❤️",
              },
              {
                title: "laparoscopic hysterectomy",
                description: "A laparoscopic hysterectomy is a minimally invasive surgical procedure to remove the uterus.",
                icon: "💻",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FF94BC] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
        className="py-16 bg-[#f34887] text-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We&apos;re proud to have helped thousands of patients on their healthcare journey.
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
                className="bg-[#FF94BC] text-gray-800 p-6 rounded-lg shadow-md"
              >
                <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
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
          <Button asChild size="lg" className="bg-[#f34887] hover:bg-[#FF94BC]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <div className="mt-8 w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4646.519196785231!2d80.34881217626095!3d26.452542679713083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4794f885d19d%3A0xdfccd4d75acf7caf!2sDr%20Anita%20Singh!5e1!3m2!1sen!2sin!4v1740906938747!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>      
        </div>
      </motion.section>
    </div>
  )
}