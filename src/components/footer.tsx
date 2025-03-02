"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#c785ec] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">HealthCare Practice</h3>
            <p className="text-blue-100 mb-4">
              Providing compassionate, comprehensive healthcare services for you and your family.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
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
                  Primary Care
                </Link>
              </li>
              <li>
                <Link href="/services#specialized-medicine" className="text-blue-100 hover:text-white">
                  Specialized Medicine
                </Link>
              </li>
              <li>
                <Link href="/services#preventive-care" className="text-blue-100 hover:text-white">
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link href="/services#diagnostic-services" className="text-blue-100 hover:text-white">
                  Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/services#chronic-disease-management" className="text-blue-100 hover:text-white">
                  Chronic Disease Management
                </Link>
              </li>
              <li>
                <Link href="/services#telemedicine" className="text-blue-100 hover:text-white">
                  Telemedicine
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
                  123 Medical Center Drive
                  <br />
                  Suite 200
                  <br />
                  Anytown, ST 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">info@healthcarepractice.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#ede7f6] pt-8 pb-8 text-center text-blue-100">
          &copy; {new Date().getFullYear()} HealthCare Practice. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

