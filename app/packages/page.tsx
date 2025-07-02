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
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Sigiriya_%28141688197%29.jpeg",
    duration: "3 Days",
    price: "-",
    description: "Explore the ancient cities of Anuradhapura, Polonnaruwa, and the magnificent Sigiriya Rock Fortress.",
    highlights: ["Sigiriya Rock Fortress", "Polonnaruwa Ancient City", "Anuradhapura Sacred City"],
    mapUrl:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.404984366143!2d80.75768207615486!3d7.957032692067544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca15b724c9ab3%3A0xab1771275b370d52!2sSigiriya!5e0!3m2!1sen!2slk!4v1751437297787!5m2!1sen!2slk",  
},
  {
    id: 2,
    name: "Hill Country Adventure",
    image:
      "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/9732566d-6b33-4a1a-ba0c-1b73ed8848a4/The+Common+Wanderer-9888.jpg",
    duration: "4 Days",
    price: "-",
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
          "https://sahashrithtravel.files.wordpress.com/2021/12/coco.jpg?w=1024",
    duration: "3 Days",
    price: "-",
    description:
      "Discover the beautiful southern coast with its pristine beaches, historic Galle Fort, and wildlife at Yala National Park.",
    highlights: ["Galle Dutch Fort", "Mirissa Beach", "Yala National Park Safari"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.25074743667!2d80.4537820160696!3d5.951582504526975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fce3177dc59%3A0xa2d8a78b36dc9c90!2sMirissa!5e0!3m2!1sen!2slk!4v1751437399554!5m2!1sen!2slk",
  },
  {
    id: 4,
    name: "Complete Island Tour",
    image:
        "https://srilankatravelpages.com/my_content/uploads/2023/07/Sri-Lanka-Travel.jpg",
    duration: "7 Days",
    price: "-",
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
         "https://www.lovesrilanka.org/wp-content/uploads/2020/06/LSL_B2_Yala-National-Park_1920x700.jpg",
    duration: "4 Days",
    price: "-",
    description:
      "Perfect for nature lovers, featuring multiple national parks and wildlife sanctuaries across the island.",
    highlights: ["Yala National Park", "Udawalawe Elephant Park", "Sinharaja Rainforest"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.454499787585!2d81.46930977614423!3d6.463961293527656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5d3a62ffb9359%3A0x3bb623d70b5a3314!2sYala%20National%20Park!5e0!3m2!1sen!2slk!4v1751437520591!5m2!1sen!2slk"
  },
  {
    id: 6,
    name: "Spiritual Journey",
    image:
         "https://live.staticflickr.com/7466/16344616755_a516594ea7_h.jpg",
    duration: "5 Days",
    price: "-",
    description: "A spiritual journey through Sri Lanka's most sacred Buddhist and Hindu temples and pilgrimage sites.",
    highlights: ["Temple of the Tooth", "Adam's Peak", "Kataragama Temple"],
    mapUrl:
         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63162.7846845757!2d80.36211410029347!3d8.335149725393949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf4f99360e159%3A0xc111fe9ebc6dcf0e!2sAnuradhapura!5e0!3m2!1sen!2slk!4v1751437614703!5m2!1sen!2slk"
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
