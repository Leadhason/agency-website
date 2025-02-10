import { Diamond } from "lucide-react"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-10 mt-10">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-8">
              <Diamond className="h-6 w-6 fill-emerald-950" />
              <h2 className="text-2xl font-medium">Get in touch with barrique</h2>
            </div>
            <p className="text-xl font-medium p-5 px-7 text-justify mb-5">
            We are here to turn your vision into reality! Whether you have a project in mind, need advice, or just want to chat about your next big idea, we would love to hear from you. We are here to turn your vision into reality! Whether you have a project in mind, need advice, or just want to chat about your next big idea, we would love to hear from you.
            </p>
            <button className="rounded-full w-[180px] mx-7 items-center hover:bg-emerald-900 hover:text-white transition-100 text-xl text-center border border-black p-3 mx-7">
                Get in touch
            </button>
          </div>
          <div className="overflow-hidden rounded-md shadow-md">
            <Image
              src="/studio.jpg"
              alt="Modern office space"
              width={400}
              height={400}
              className="h-full w-full object-cover p-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

