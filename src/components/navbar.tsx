"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Typewriter } from 'react-simple-typewriter'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

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

  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }
  
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  const services = [
    {
      title: "Normal / C-Section",
      href: "/services#normal-c-section",
      description: "A natural childbirth process with quicker recovery and lower surgical risks.",
    },
    {
      title: "High-Risk Pregnancies",
      href: "/services#high-risk-pregnancies",
      description: "Specialized care for conditions like hypertension, diabetes, or multiple pregnancies.",
    },
    {
      title: "Laparoscopic Ovarian Cystectomy",
      href: "/services#laparoscopic-ovarian-cystectomy",
      description: "Minimally invasive removal of ovarian cysts with preserved ovarian function.",
    },
    {
      title: "Hysteroscopy",
      href: "/services#hysteroscopy",
      description: "A non-invasive procedure to diagnose and treat uterine conditions like fibroids and polyps.",
    },
    {
      title: "Laparoscopic Myomectomy",
      href: "/services#laparoscopic-myomectomy",
      description: "Fibroid removal surgery that preserves the uterus and improves fertility.",
    },
    {
      title: "Laparoscopic Hysterectomy",
      href: "/services#laparoscopic-hysterectomy",
      description: "A minimally invasive uterus removal procedure with faster recovery and minimal pain.",
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-[#f34887] shadow-md py-2" : "bg-[#f34887] backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          <div className='App'>
      <h1 className="text-3xl font-bold">
        Dr.{' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Anita Singh']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={150}
            delaySpeed={4000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
    </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f34887] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF94BC] hover:text-gray-900 focus:bg-[#FF94BC] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#f694bc]/50 data-[state=open]:bg-[#f694bc]/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f34887] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF94BC] hover:text-gray-900 focus:bg-[#FF94BC] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#FF94BC]/50 data-[state=open]:bg-[#FF94BC]/50">
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#f34887] text-white hover:bg-[#FF94BC] hover:text-gray-900 focus:bg-[#FF94BC] focus:text-gray-900">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FF94BC] hover:text-gray-900 focus:bg-[#FF94BC] focus:text-gray-900"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f34887] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#FF94BC] hover:text-gray-900 focus:bg-[#FF94BC] focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#FF94BC]/50 data-[state=open]:bg-[#FF94BC]/50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/contact">
            <Button variant="outline" className="ml-4 bg-white text-[#f34887] hover:bg-gray-100 hover:text-[#f34887]">
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          
          <div className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="bg-white text-[#f34887] hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[320px] sm:w-[400px] px-6 py-6 shadow-xl rounded-l-lg bg-[#f34887]">
          <SheetTitle className="text-2xl font-semibold text-white">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-5 mt-6 text-gray-800">
            <Link href="/" className="block px-3 py-3 text-lg font-medium bg-[#FF94BC] transition-all duration-300 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-3 text-lg font-medium bg-[#FF94BC] transition-all duration-300 rounded-lg">
              About
            </Link>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium bg-[#FF94BC] transition-all duration-300 rounded-lg"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-5 mt-2 space-y-2 border-l-2 border-[#f34887]/30">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="block px-3 py-2 text-base hover:text-[#f34887] transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/contact" className="block px-3 py-3 text-lg font-medium bg-[#FF94BC] transition-all duration-300 rounded-lg">
              Contact
            </Link>
            <Link href="/contact">
              <Button className="mt-5 bg-[#FF94BC] text-white hover:bg-[#FF94BC] transition-all duration-300 shadow-lg rounded-lg w-full py-3 text-lg">
                Book Appointment
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
        </div>
      </div>
    </header>
  )
}