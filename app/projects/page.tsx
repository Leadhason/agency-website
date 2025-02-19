'use client'

import { Diamond } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import ProjectsPagination from "@/components/project-pagination"
import { useSearchParams } from "next/navigation"

const projects = [
  {
    title: "LightHouse",
    category: "Logo Design",
    image: "/projects/lighthouse.jpg",
    href: "/",
  },
  {
    title: "Shadow Studio",
    category: "Logo Design",
    image: "/projects/shadow-studio.jpg",
    href: "/",
  },
  {
    title: "CloudNine",
    category: "Web Development",
    image: "/projects/website-1.jpg",
    href: "/",
  },
  {
    title: "TechFlow ",
    category: "Web Development",
    image: "/projects/website-2.jpg",
    href: "/",
  },
  {
    title: "GreenEarth",
    category: "Shirt Printing",
    image: "/projects/shirt-1.jpg",
    href: "/",
  },
  {
    title: "ArtisanCraft",
    category: "Shirt Printing",
    image: "/projects/shirt-2.jpg",
    href: "/",
  },
  {
    title: "FreshBite",
    category: "Graphic Design",
    image: "/projects/graphics-1.jpg",
    href: "/",
  },
  {
    title: "EcoVibe",
    category: "Graphic Design",
    image: "/projects/graphics-2.jpg",
    href: "/",
  },
  
]

export default function ProjectsPage() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1
  const projectsPerPage = 4
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

  return (
    <main className="">
      {/* Hero Section */}
      <section className="bg-emerald-950 py-24 px-5 sm:px-10 text-white md:py-32">
        <div className="container mx-auto flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold tracking-tighter">
                <span className='sm:text-7xl md:text-[140px] lg:text-[180px] lg:mr-[190px]'>our crafted</span>
                <br />
                <span className='lg:ml-[760px] sm:text-7xl md:text-[140px] lg:text-[180px] mt-10'>work</span>
            </h1>
         <div className="items-center justify-center lg:justify-start w-full">
            <p className="max-w-lg text-lg font-medium text-justify px-14 mt-10 lg:ml-[50px] text-zinc-300">
                Check out our portfolio, where you'll find projects
                that showcase our dedication to quality and creativity.
            </p>
         </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Diamond className="h-8 w-8 fill-emerald-950" />
            <h2 className="text-2xl font-medium">Check out some of our work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {currentProjects.map((project) => (
              <Link key={project.title} href={project.href} className="group space-y-4">
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="aspect-4/3 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col space-y-2 justify-between">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="rounded-full text-nowrap flex w-min border border-black p-3 text-gray-500">
                    {project.category}
                    </Badge>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16">
            <ProjectsPagination totalPages={totalPages} currentPage={currentPage} />
          </div>
        </div>
      </section>
    </main>
  )
}

