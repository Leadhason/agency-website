import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-emerald-950 py-12 text-white">
      <div className="container relative mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium">inkoperations media</h3>
            <address className="mt-2 not-italic">
              Prestige Hostel, Deduako,
              <br />
              Kumasi, Ghana
            </address>
          </div>
          <div className="flex gap-8 md:justify-center">
            <Link href="/privacy" className="hover:text-zinc-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300">
              Terms of Use
            </Link>
            <Link href="/licensing" className="hover:text-zinc-300">
              Licensing
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Link
              href="https://instagram.com"
              className="flex items-center hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href="https://behance.com"
              className="flex items-center hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              BEHANCE
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center border-t border-white/10 pt-8">
          <p className="text-sm text-zinc-400">© 2024 Inkoperations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

