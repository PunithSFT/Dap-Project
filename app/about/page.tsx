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

      {/* Premium Transportation Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8 lg:mb-0">
                <Image
                  src="Res/Car.jpg"
                  alt="Luxury Toyota Premio 2015"
                  fill
                  className="rounded-lg object-cover border-8 border-green-100"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Transportation</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Experience comfort and elegance in our meticulously maintained Luxury Toyota Premio 2010. Our vehicle
                  is regularly serviced and maintained to the highest standards to ensure your safety and comfort
                  throughout your journey.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">Comfort Features</h3>
                <ul className="list-disc list-inside">
                  <li>Premium seating</li>
                  <li>Dual-zone climate control</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900">Modern Amenities</h3>
                <ul className="list-disc list-inside">
                  <li>Advanced GPS navigation</li>
                  
                </ul>
                <h3 className="text-xl font-semibold text-gray-900">Safety & Maintenance</h3>
                <ul className="list-disc list-inside">
                  <li>Regular professional maintenance</li>
                  <li>24/7 roadside assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey in Sri Lankan Tourism Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8 lg:mb-0">
                <Image
                  src="/Res/Me.JPG"
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
                  Welcome to my world of Sri Lankan hospitality! My name is Priyantha Mangala, and for over 20 years, I have
                  dedicated myself to showcasing the breathtaking beauty of Sri Lanka as a professional chauffeur guide.
                  Working extensively with prestigious 5-star hotels, I have had the privilege of guiding countless
                  visitors through our vibrant culture and stunning landscapes.
                </p>
                <p>
                  My journey began with a deep passion for sharing the rich heritage of my homeland. This passion has
                  grown into a commitment to delivering unparalleled travel experiences, blending luxury, comfort, and
                  personalized service. With every trip, I aim to create lasting memories for my guests.
                </p>
                <p>
                  My trusty companion on these journeys is my pearl white Luxury Toyota Premio 2010 – a reliable,
                  comfortable, and meticulously maintained vehicle that ensures safe and enjoyable travels across our
                  beautiful island.
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
                <div className="bg-green-100 w-16 felt h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Well-maintained Luxury Toyota Premio 2015 with air conditioning, comfortable seating, and all modern
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