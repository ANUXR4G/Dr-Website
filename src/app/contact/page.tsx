"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toaster, toast } from "sonner"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [timeRange, setTimeRange] = useState<{ min: string; max: string }>({ min: "00:00", max: "23:59" })

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate)
      const day = date.getUTCDay()

      if (day === 0) { // Sunday
        setTimeRange({ min: "11:00", max: "14:00" })
      } else if (day >= 1 && day <= 6) { // Monday to Saturday
        setTimeRange({ min: "16:00", max: "20:00" })
      }
    }
  }, [selectedDate])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success("Form submitted successfully", {
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      setSelectedDate("")
      setSelectedTime("")
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast Notification */}
      <Toaster position="top-right" richColors />

      {/* Header */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
        className="bg-[#f694bc] py-20"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We&apos;re here to help. Reach out to us with any questions or to schedule an appointment.
          </p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, x: 50 }}
        animate={formInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 md:px-6 py-10"
      >
        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="youremail@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Contact</Label>
                <Select>
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appointment">Schedule an Appointment</SelectItem>
                    <SelectItem value="information">Request Information</SelectItem>
                    <SelectItem value="feedback">Provide Feedback</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Preferred Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  min={timeRange.min}
                  max={timeRange.max}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-[#f34887] hover:bg-[#FF94BC]" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}