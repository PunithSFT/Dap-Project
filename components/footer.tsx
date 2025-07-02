"use client"

import Link from "next/link"
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl sm:text-xl">Tripcey</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Your trusted chauffeur guide for exploring the beautiful island of Sri Lanka. 20+ years of experience in
              creating unforgettable travel memories.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-lg mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-lg mb-4 text-center sm:text-left">Our Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base text-center sm:text-left">
              <li>Cultural Triangle Tours</li>
              <li>Hill Country Adventures</li>
              <li>Beach & Wildlife Tours</li>
              <li>Custom Tour Packages</li>

            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg sm:text-lg mb-4 text-center sm:text-left">Contact Info</h3>
            <div className="space-y-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-300 text-sm sm:text-base">+94 76 614 0217</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-300 text-sm sm:text-base">mangalapayagala@gmail.com</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-green-400 mt-1" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Serving all major destinations
                  <br />
                  across Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Sri Lanka Chauffeur Guide. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 items-center">
              <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}