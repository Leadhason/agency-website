import { Diamond } from "lucide-react"
import Image from "next/image"

export default function TrustedBy() {
  const logos = [
    { name: "Logo 1", src: "/logos/logo-1.svg" },
    { name: "Logo 2", src: "/logos/llogo-2.svg" },
    { name: "Logo 3", src: "/logos/logo-3.svg" },
    { name: "Logo 4", src: "/logos/logo-4.svg" },
    { name: "Logo 5", src: "/logos/logo-5.svg" },
    { name: "Logo 6", src: "/logos/logo-3.svg" },
    { name: "Logo 7", src: "/logos/logo-6.svg" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h-6 w-6 fill-emerald-950" />
          <h2 className="text-2xl font-medium">We are trusted by</h2>
        </div>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 px-10 lg:grid-cols-7">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center  p-4justify-center grayscale transition-all hover:grayscale-0">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

