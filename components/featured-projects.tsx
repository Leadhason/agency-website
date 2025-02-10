import { Diamond } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "ReviveCo",
      category: "Graphic Design",
      image: "/3d-design.jpg",
      href: "/projects/reviveco",
    },
    {
      title: "EcoVibe",
      category: "Web Development",
      image: "/website-preview.jpg",
      href: "/projects/ecovibe",
    },
    {
        title: "EcoVibe",
        category: "Graphic Design",
        image: "/book-cover.jpg",
        href: "/projects/ecovibe",
    },
    {
        title: "T-shirt",
        category: "Shirt Printing",
        image: "/T-shirt.jpg",
        href: "/projects/ecovibe",
      },
      
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h-6 w-6 fill-emerald-950" />
          <h2 className="text-xl font-medium">Selected projects</h2>
        </div>
        <div className="grid gap-x-8 gap-6 md:grid-cols-2 md:gap-x-10">
          {projects.map((project) => (
            <div key={project.title} className="group space-y-4 p-4"> 
                <Link href={project.href}>
                    <div className="overflow-hidden rounded-lg aspect-w-2 aspect-h-1">
                        <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={50}
                        height={30}
                        className="aspect-ratio-1/2 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 justify-between">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <Badge variant="outline" className="rounded-full text-nowrap flex w-min border border-black p-3 text-gray-500">
                        {project.category}
                        </Badge>
                    </div>
                </Link>
            </div>
          ))}
        </div>
        <div>
            <button className="rounded-full w-[180px] mx-7 items-center hover:bg-emerald-900 hover:text-white text-xl text-center border border-black p-3">
              see all projects
            </button>
        </div>
      </div>
    </section>
  )
}

