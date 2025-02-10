"use client"

import { Diamond } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a comprehensive range of services including brand strategy, web development, and digital marketing solutions tailored to your specific needs.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Our process begins with an initial consultation, followed by planning, design, development, and launch phases. We maintain clear communication throughout.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website project takes 8-12 weeks, while branding projects may take 4-6 weeks.",
  },
  {
    question: "Can you help improve our current website, or do you only build new ones?",
    answer:
      "We offer both services. We can enhance your existing website through redesign and optimization, or create a completely new website from scratch.",
  },
]

export default function FAQSection() {
  return (
    <section className="border-t py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Diamond className="h-6 w-6 fill-emerald-950" />
          <h2 className="text-2xl font-medium">FAQ</h2>
        </div>
        <div className="mx-auto px-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-2xl font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 text-lg font-medium text-justify items-center overflow-auto">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

