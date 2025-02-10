import { Diamond, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "01",
    title: "Branding and Logo Design",
    description:
      "From logos to tone of voice, we build brands that stand out, ensuring long-lasting connections with customers.",
    href: "/services/brand-strategy",
  },
  {
    id: "02",
    title: "Web Development",
    description: "Combining stunning visuals with seamless functionality, we bring your digital presence to life.",
    href: "/services/web-development",
  },
  {
    id: "03",
    title: "Shirt Printing",
    description: "Strategic campaigns that drive results and connect with your target audience.",
    href: "/services/digital-marketing",
  },
  {
    id: "04",
    title: "Graphic Design",
    description: "Strategic campaigns that drive results and connect with your target audience.",
    href: "/services/digital-marketing",
  },
]

export default function ServicesList() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h-6 w-6 fill-emerald-950" />
          <h2 className="text-2xl font-medium">Professional & exceptional</h2>
        </div>
        <div className="space-y-12 px-10">
          {services.map((service) => (
            <div key={service.id} className="group border-b border-black pb-12 last:border-0">
              <Link href={service.href} className="block space-y-4">
                <div className="flex items-center p-3 justify-between">
                    <div className="flex">
                        <div className="space-y-4 max-w-48">
                            <h2 className="text-4xl font-semibold">{service.id}</h2>
                            <h2 className="text-3xl text-wrap font-semibold">{service.title}</h2>
                        </div>
                        <div className="flex items-center max-w-lg text-center ">
                            <p className="text-lg text-justify mx-20 font-light text-zinc-600">{service.description}</p>
                        </div>
                    </div>
                    <ArrowUpRight className="h-16 w-16 text-extralight transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

