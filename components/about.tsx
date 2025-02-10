import Image from "next/image"
import { Diamond } from "lucide-react"

export default function About() {
  return (
    <>
      {/* White section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8">
            <div className="space-y-8 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-5">
                <Diamond className="h-8 w-8 fill-emerald-950" />
                <h2 className="text-2xl font-medium">About INK. media</h2>
              </div>
              <div className="space-y-6 text-xl font-medium p-5 px-7 text-justify">
                <p>
                  At inkoperations media, we're a group of
                  <br/>passionate creatives, tech geeks, and marketing pros
                  <br/>who love nothing more than crafting unique
                  <br/>digital experiences.
                </p>
                <p>
                  Based in the heart of Zagreb, we
                  <br/>specialize in combining bold ideas with innovative
                  <br/>web development and savvy digital marketing strategies
                  <br/>that actually get results.
                </p>
              </div>
              <button className="rounded-full w-[180px] mx-7 items-center hover:bg-emerald-900 hover:text-white transition-100 text-xl text-center border border-black p-3">
                see more
              </button>
            </div>
            <div className="relative lg:flex md:flex gap-6 sm:grid-cols-1">
              <div className="lg:w-[600px] lg:h-[200px] lg:mt-20">
                <Image
                  src="/illustration.jpg"
                  alt="Laptop showing website design"
                  width={500}
                  height={500}
                  className="object-fit"
                />
              </div>
              <div className="lg:w-[600px] lg:h-[200px]">
                <Image
                  src="/illustration-1.jpg"
                  alt="Geometric shapes and objects"
                  width={500}
                  height={500}
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green section */}
      <section className="relative bg-emerald-950 py-24 text-white md:py-32">
        <div className="container flex flex-col mx-auto lg:text-justify sm:text-center my-10 md:my-16">
          <h2 className="max-w-4xl text-3xl font-medium space-y-3 md:text-4xl lg:text-5xl">
            <p>We don't just create,</p>       
            <p>we innovate, inspire,</p>
            <p>and transform. Every</p>
            <p>pixel we design, and</p>
            <p>every strategy we craft</p>
            <p>is a step closer to</p>
            <p>shaping your vision in</p>
            <p>brand that stands out.</p>
          </h2>
        </div>
      </section>
    </>
  )
}

