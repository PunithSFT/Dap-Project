"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Clock } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    id: 1,
    name: "Cultural Triangle Tour",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "3 Days",
    price: "$150",
    description: "Explore the ancient cities of Anuradhapura, Polonnaruwa, and the magnificent Sigiriya Rock Fortress.",
    highlights: ["Sigiriya Rock Fortress", "Polonnaruwa Ancient City", "Anuradhapura Sacred City"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58164760513!2d80.7718068!3d7.9403308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb06b073f0c9c7%3A0x2c63e344ab9a7536!2sSigiriya!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Hill Country Adventure",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    duration: "4 Days",
    price: "$200",
    description:
      "Experience the cool climate and stunning landscapes of Sri Lanka's hill country including Kandy, Nuwara Eliya, and Ella.",
    highlights: ["Temple of the Tooth - Kandy", "Tea Plantations - Nuwara Eliya", "Nine Arch Bridge - Ella"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58164760513!2d80.7718068!3d7.2403308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e2039c!2sKandy!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Southern Coast Explorer",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "3 Days",
    price: "$180",
    description:
      "Discover the beautiful southern coast with its pristine beaches, historic Galle Fort, and wildlife at Yala National Park.",
    highlights: ["Galle Dutch Fort", "Mirissa Beach", "Yala National Park Safari"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58164760513!2d80.2718068!3d6.0403308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb6932fce3%3A0x4a35b903f9c64c03!2sGalle!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "Complete Island Tour",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "7 Days",
    price: "$350",
    description:
      "The ultimate Sri Lankan experience covering cultural sites, hill country, beaches, and wildlife in one comprehensive tour.",
    highlights: ["All major cultural sites", "Hill country tea estates", "Beach relaxation", "Wildlife safari"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2021196.5651848456!2d79.6129707!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
  {
    id: 5,
    name: "Wildlife & Nature Tour",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "4 Days",
    price: "$220",
    description:
      "Perfect for nature lovers, featuring multiple national parks and wildlife sanctuaries across the island.",
    highlights: ["Yala National Park", "Udawalawe Elephant Park", "Sinharaja Rainforest"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58164760513!2d81.3718068!3d6.3703308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae69e3c0b1e6b1f%3A0x8c1a02b1a1e2039c!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
  {
    id: 6,
    name: "Spiritual Journey",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    duration: "5 Days",
    price: "$250",
    description: "A spiritual journey through Sri Lanka's most sacred Buddhist and Hindu temples and pilgrimage sites.",
    highlights: ["Temple of the Tooth", "Adam's Peak", "Kataragama Temple"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58164760513!2d80.6418068!3d7.2903308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e2039c!2sKandy!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk",
  },
]

export default function PackagesPage() {
  return (
    <div className="pt-16">
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tour Packages</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted tour packages designed to showcase the best of Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                    <span className="mx-2">•</span>
                    <span className="text-lg font-bold text-green-600">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pkg.description}</p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{pkg.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Image
                            src={pkg.image || "/placeholder.svg"}
                            alt={pkg.name}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full"
                          />
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                            <ul className="space-y-1">
                              {pkg.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <MapPin className="h-3 w-3 mr-2 text-green-600" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-gray-600">Duration:</span>
                              <span className="font-semibold">{pkg.duration}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-gray-600">Price:</span>
                              <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-4">{pkg.description}</p>

                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Location Map:</h4>
                            <div className="aspect-video rounded-lg overflow-hidden">
                              <iframe
                                src={pkg.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                            </div>
                          </div>

                          <Button asChild className="w-full">
                            <Link href="/contact">Book Now</Link>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
