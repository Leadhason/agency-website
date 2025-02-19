import { ArrowUpRight, Diamond } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Branding & Logo Design",
      href: "/services/branding-and-logo-design",
    },
    {
      title: "Web Development",
      href: "/services/web-development",
    },
    {
      title: "Shirt Printing",
      href: "/services/shirt-printing",
    },
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h- w-7 fill-emerald-950" />
          <h2 className="text-xl font-medium">What we do</h2>
        </div>
        <div className="space-y-6">
          {services.map((service) => (
            <div key={service.title} className="border-b border-black p-7">
              <Link href={service.href} className="group flex items-center justify-between py-6">
                <h3 className="text-xl font-medium md:text-2xl lg:text-3xl">{service.title}</h3>
                <ArrowUpRight className="h-12 w-12 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

