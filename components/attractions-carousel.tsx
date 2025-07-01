"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const attractions = [
  {
    name: "Sigiriya Rock Fortress",
    image: "/Res/CardMedia/Sigiriya.jpg",
  },
  {
    name: "Temple of the Tooth",
    image: "/Res/CardMedia/Kandy.webp",
  },
  {
    name: "Galle Fort",
    image: "/Res/CardMedia/Galle.webp",
  },
  {
    name: "Yala National Park",
    image: "/Res/CardMedia/Yala.jpg",
  },
  {
    name: "Nuwara Eliya Tea Plantations",
    image: "/Res/CardMedia/Nuwaraeliya.jpg",
  },
  {
    name: "Mirissa Beach",
    image: "/Res/CardMedia/Mirissa2.jpeg",
  },
  {
    name: "Ella Nine Arch Bridge",
    image: "/Res/CardMedia/9Arch.jpg",
  },
  {
    name: "Polonnaruwa Ancient City",
    image: "/Res/CardMedia/Polonnaruwa.jpg",
  },
]

export default function AttractionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % attractions.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const translateValue = isMobile ? currentIndex * 100 : currentIndex * (100 / 4)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tourist Attractions</h2>
          <p className="text-lg text-gray-600">Explore the most beautiful destinations Sri Lanka has to offer</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateValue}%)` }}
          >
            {attractions.concat(attractions).map((attraction, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">{attraction.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-center mt-4 space-x-2">
            {attractions.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex % attractions.length ? "bg-green-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}