"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
  className={cn(
    "sticky top-0 z-50 w-full transition-all duration-300",
    isScrolled ? "bg-[#c785ec] shadow-md py-2" : "bg-[#c785ec] backdrop-blur-sm py-4",
  )}
>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#B19CD9]">HealthCare</span>
            <span className="text-2xl font-bold text-gray-700">Practice</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#c785ec] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D8BFD8] hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#c785ec] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#D8BFD8] hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#c785ec]">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        {
                          title: "Primary Care",
                          href: "/services#primary-care",
                          description: "Comprehensive healthcare for patients of all ages",
                        },
                        {
                          title: "Specialized Medicine",
                          href: "/services#specialized-medicine",
                          description: "Expert care in various medical specialties",
                        },
                        {
                          title: "Preventive Care",
                          href: "/services#preventive-care",
                          description: "Proactive healthcare services",
                        },
                        {
                          title: "Diagnostic Services",
                          href: "/services#diagnostic-services",
                          description: "Advanced diagnostic testing and imaging",
                        },
                        {
                          title: "Chronic Disease Management",
                          href: "/services#chronic-disease-management",
                          description: "Ongoing care for long-term conditions",
                        },
                        {
                          title: "Telemedicine",
                          href: "/services#telemedicine",
                          description: "Virtual healthcare services",
                        },
                      ].map((service, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#D8BFD8] focus:bg-[#D8BFD8]"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#c785ec] px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button & Mobile Menu Trigger */}
          <div className="flex items-center">
            <Button asChild variant="ghost" size="sm" className="mr-2 hidden md:flex">
              <Link href="tel:1234567890" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </Link>
            </Button>

            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contact">Book Appointment</Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-xl font-bold text-blue-600">HealthCare</span>
                      <span className="text-xl font-bold text-gray-700">Practice</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/"
                      className="text-lg font-medium py-2 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium py-2 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    <div className="py-2">
                      <button
                        className="flex items-center justify-between w-full text-lg font-medium hover:text-blue-600"
                        onClick={(e) => e.preventDefault()}
                      >
                        Services
                        <ChevronDown className="h-5 w-5" />
                      </button>
                      <div className="pl-4 mt-2 space-y-2">
                        {[
                          { title: "Primary Care", href: "/services#primary-care" },
                          { title: "Specialized Medicine", href: "/services#specialized-medicine" },
                          { title: "Preventive Care", href: "/services#preventive-care" },
                          { title: "Diagnostic Services", href: "/services#diagnostic-services" },
                          { title: "Chronic Disease Management", href: "/services#chronic-disease-management" },
                          { title: "Telemedicine", href: "/services#telemedicine" },
                        ].map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="text-lg font-medium py-2 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full">
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Book Appointment
                      </Link>
                    </Button>

                    <div className="mt-6 text-center text-gray-600">
                      <p className="font-medium">Need help?</p>
                      <Link href="tel:1234567890" className="text-blue-600 font-bold hover:underline">
                        (123) 456-7890
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

