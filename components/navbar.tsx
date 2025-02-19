"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-background/10 backdrop-blur-md supports-[backdrop-filter]:bg-background/10">
      <div className="container flex h-16 items-center mx-auto px-7 justify-between">
        <Link href="/" className="text-2xl font-bold p-4 text-center">
          Inkoperations.
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-4 outline-none" aria-label="Toggle Menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-none bg-emerald-950">
            <nav className="flex h-full w-full flex-col items-center justify-center text-white">
              <div className="flex flex-col items-center gap-8">
                <Link href="/"  onClick={() => setIsOpen(false)} className="text-5xl font-light transition-colors hover:underline">
                  Home
                </Link>
                <Link href="/about"  onClick={() => setIsOpen(false)} className="text-5xl font-light transition-colors hover:underline">
                  About
                </Link>
                <Link href="/services"  onClick={() => setIsOpen(false)} className="text-5xl font-light transition-colors hover:underline">
                  Services
                </Link>
                <Link href="/projects"  onClick={() => setIsOpen(false)} className="text-5xl font-light transition-colors hover:underline">
                  Our Work
                </Link>
                <Link href="/contact"  onClick={() => setIsOpen(false)} className="text-5xl font-light transition-colors hover:underline">
                  Contact
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

