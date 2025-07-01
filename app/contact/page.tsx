"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, X } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in your chauffeur guide services in Sri Lanka. Could you please provide more information?`
    const whatsappUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleFormClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to explore Sri Lanka? Get in touch with us to plan your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                    WhatsApp Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    For instant communication and quick responses, contact us via WhatsApp
                  </p>
                  <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700 w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold">Phone</h3>
                    </div>
                    <p className="text-gray-600">+94 77 123 4567</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <Mail className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold">Email</h3>
                    </div>
                    <p className="text-gray-600">info@srilankaguide.com</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">Service Areas</h3>
                  </div>
                  <p className="text-gray-600">We provide chauffeur guide services throughout Sri Lanka, including:</p>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Colombo & Western Province</li>
                    <li>• Cultural Triangle (Kandy, Sigiriya, Anuradhapura)</li>
                    <li>• Hill Country (Nuwara Eliya, Ella, Badulla)</li>
                    <li>• Southern Coast (Galle, Mirissa, Yala)</li>
                    <li>• Eastern Province (Trincomalee, Batticaloa)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="relative">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" onClick={handleFormClick}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cultural-tour">Cultural Triangle Tour</SelectItem>
                        <SelectItem value="hill-country">Hill Country Adventure</SelectItem>
                        <SelectItem value="southern-coast">Southern Coast Explorer</SelectItem>
                        <SelectItem value="complete-tour">Complete Island Tour</SelectItem>
                        <SelectItem value="wildlife-tour">Wildlife & Nature Tour</SelectItem>
                        <SelectItem value="spiritual-journey">Spiritual Journey</SelectItem>
                        <SelectItem value="custom-tour">Custom Tour Package</SelectItem>
                        <SelectItem value="airport-transfer">Airport Transfer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us about your travel plans, dates, number of travelers, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
              {showPopup && (
                <div className="absolute top-4 left-4 right-4 bg-yellow-100 text-yellow-800 text-sm font-medium text-center py-3 px-4 sm:text-base rounded-md shadow-md">
                  <div className="flex items-center justify-between">
                    <span>Email service under maintenance. Please contact via WhatsApp.</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-yellow-800 hover:text-yellow-900"
                      onClick={handleClosePopup}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}