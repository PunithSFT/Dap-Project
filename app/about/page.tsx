import Image from "next/image"
import { Award, Users, Car, Star, Clock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Your Sri Lankan Guide</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Two decades of passion, expertise, and dedication to showcasing the beauty of Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8 lg:mb-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Professional Chauffeur Guide"
                  fill
                  className="rounded-full object-cover border-8 border-green-100"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey in Sri Lankan Tourism</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to my world of Sri Lankan hospitality! My name is [Your Name], and I have been privileged to
                  serve as a professional chauffeur guide for over 20 years, sharing the incredible beauty and rich
                  culture of my beloved homeland with visitors from around the globe.
                </p>
                <p>
                  What started as a passion for meeting people from different cultures has evolved into a lifelong
                  commitment to providing exceptional travel experiences. Over the years, I have had the honor of
                  guiding more than 100,000 satisfied travelers, each with their own unique story and travel dreams.
                </p>
                <p>
                  My trusty companion on these journeys is my pearl white Toyota Premio 2010 – a reliable, comfortable,
                  and well-maintained vehicle that has covered countless miles across this beautiful island, ensuring
                  safe and comfortable travels for all my guests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience That Speaks</h2>
            <p className="text-lg text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100,000+</h3>
                <p className="text-gray-600">Satisfied Travelers</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
                <p className="text-gray-600">Hotel Partnerships</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">4.9/5</h3>
                <p className="text-gray-600">Average Rating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Me Apart</h2>
            <p className="text-lg text-gray-600">The qualities that make your journey exceptional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Licensed, insured, and committed to your safety with a spotless driving record and regular vehicle
                  maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Born and raised in Sri Lanka with intimate knowledge of hidden gems, local customs, and the best
                  experiences off the beaten path.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfortable Travel</h3>
                <p className="text-gray-600">
                  Well-maintained Toyota Premio 2010 with air conditioning, comfortable seating, and all modern
                  amenities for a pleasant journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  Every tour is customized to your interests, pace, and preferences. Your journey, your way.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotel Partnerships</h3>
                <p className="text-gray-600">
                  Established relationships with 5+ premium hotels ensuring the best accommodations and rates for our
                  guests.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Punctuality</h3>
                <p className="text-gray-600">
                  Respect for your time with punctual pickups, efficient routing, and adherence to planned schedules.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My mission is simple: to share the incredible beauty, rich culture, and warm hospitality of Sri Lanka with
            every traveler I meet. I believe that travel is not just about visiting places – it's about creating
            memories, understanding cultures, and forming connections that last a lifetime. Every journey with me is an
            opportunity to discover not just the sights and sounds of Sri Lanka, but also its heart and soul.
          </p>
        </div>
      </section>
    </div>
  )
}
