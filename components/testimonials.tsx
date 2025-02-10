"use client"

import { Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      '"Working with Barrique was a game-changer for our brand. Their strategic approach and creative solutions exceeded our expectations."',
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    quote:
      '"The team at Barrique brought fresh perspectives and innovative ideas that transformed our digital presence."',
    author: "Mark Williams",
    role: "Marketing Director, InnovateCo",
  },
  // Add more testimonials as needed
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h-6 w-6 fill-emerald-950" />
          <h2 className="text-2xl font-medium">Testimonials</h2>
        </div>
        <div className="relative">
          <div className="rounded-3xl bg-zinc-900 p-8 md:p-12 aspect-ratio-square">
            <h3 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">what others say about barrique</h3>
            <div className="mt-8 text-lg text-zinc-300">
              {testimonials[currentIndex].quote}
              <div className="mt-4 font-medium">
                {testimonials[currentIndex].author}
                <span className="block text-zinc-400">{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" size="icon" onClick={previous} className="rounded-full bg-zinc-900 text-white">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-zinc-900 text-white">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

