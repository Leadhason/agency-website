"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12 flex items-center justify-between">
        {steps.map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm
                ${
                  s === step
                    ? "bg-emerald-950 text-white"
                    : s < step
                      ? "bg-emerald-950/10 text-emerald-950"
                      : "bg-zinc-100 text-zinc-400"
                }`}
            >
              {s}
            </div>
            {s !== steps.length && (
              <div
                className={`h-px w-full flex-1 
                  ${s < step ? "bg-emerald-950" : "bg-zinc-200"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="rounded-[10px] shadow-md border-none outline-none p-8 hover:shadow-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="email@email.com"
              className="rounded-[10px] shadow-md border-none outline-none p-8 hover:shadow-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="rounded-[10px] shadow-md border-none outline-none p-8 hover:shadow-lg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Company name"
              className="rounded-[10px] shadow-md border-none outline-none p-8 hover:shadow-lg"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => setStep((s) => Math.min(s + 1, totalSteps))}
             className="rounded-full border border-black text-black bg-transparent px-10 py-6 hover:bg-emerald-950 hover:text-white"
          >
            Next step
          </Button>
        </div>
      </form>
    </div>
  )
}

