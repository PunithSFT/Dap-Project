"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Facebook } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-24 lg:pt-20 pb-20 bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Res/WhatsApp Image.jpg')`,
        }}
      />

      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 block lg:hidden">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 mb-12 sm:mb-10">
            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 border-4 border-white shadow-lg rounded-full hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/Res/Me.JPG"
                alt="Priyantha Mangala"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-md">
            <h1 className="text-4xl font-extrabold mb-4 leading-tight">
              Priyantha Mangala
            </h1>
            <h2 className="text-lg font-medium text-green-400 mb-6">
              Professional Chauffeur Guide
            </h2>
            <p className="text-sm text-opacity-80 mb-8">
              Experience the breathtaking beaches, lush landscapes, and rich culture of Sri Lanka with your dedicated
              professional guide.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                asChild
                className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200"
              >
                <Link href="/packages">Explore Tours →</Link>
              </Button>
              <div className="flex items-center space-x-4">
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-white hover:text-blue-500 transition duration-300" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-white hover:text-blue-700 transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          <div className="flex justify-center mb-8 lg:mb-0">
            <div
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-70 md:h-70 border-4 border-white shadow-lg rounded-full hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src="/Res/Me.JPG"
                alt="Priyantha Mangala"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-8">
            <h1 className="text-6xl font-extrabold mb-4 leading-tight">
              Priyantha Mangala
            </h1>
            <h2 className="text-2xl font-medium text-green-400 mb-6">
              Professional Chauffeur Guide
            </h2>
            <p className="text-base text-opacity-80 mb-8 max-w-md">
              Experience the breathtaking beaches, lush landscapes, and rich culture of Sri Lanka with your dedicated
              professional guide.
            </p>
            <div className="flex gap-4 justify-start">
              <Button
                size="lg"
                asChild
                className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200"
              >
                <Link href="/packages">Explore Tours →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute right-6 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4">
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-white hover:text-blue-500 transition duration-300" />
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition duration-300" />
        </Link>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-white hover:text-blue-700 transition duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;