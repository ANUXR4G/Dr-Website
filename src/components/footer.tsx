"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f34887] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Anita Singh</h3>
            <p className="text-blue-100 mb-4">
            Specializes in women&apos;s reproductive health, pregnancy care, and gynecological treatments.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#primary-care" className="text-blue-100 hover:text-white">
                Normal / C-Section
                </Link>
              </li>
              <li>
                <Link href="/services#specialized-medicine" className="text-blue-100 hover:text-white">
                High-Risk Pregnancies
                </Link>
              </li>
              <li>
                <Link href="/services#preventive-care" className="text-blue-100 hover:text-white">
                Laparoscopic Ovarian Cystectomy
                </Link>
              </li>
              <li>
                <Link href="/services#diagnostic-services" className="text-blue-100 hover:text-white">
                Hysteroscopy
                </Link>
              </li>
              <li>
                <Link href="/services#chronic-disease-management" className="text-blue-100 hover:text-white">
                Laparoscopic Myomectomy
                </Link>
              </li>
              <li>
                <Link href="/services#telemedicine" className="text-blue-100 hover:text-white">
                Laparoscopic Hysterectomy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                564, Jaipuria Rd, Opposite Kanpur Central, Harris Ganj, Rail Bazar, Mirpur Cantonment, Mirpur, Kanpur, Uttar Pradesh 208004
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">info@healthcarepractice.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ede7f6] pt-8 pb-8 text-center text-blue-100">
          &copy; {new Date().getFullYear()} Dr.Anita Singh . All rights reserved.
        </div>
      </div>
    </footer>
  )
}

