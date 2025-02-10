import { Diamond } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const stats = [
    { number: "7", label: "years in business" },
    { number: "100+", label: "projects" },
    { number: "70+", label: "satisfied clients" },
    { number: "20", label: "team members" },
  ]

  const team = [
    {
      name: "Jaxon Thorne",
      role: "Chief Executive Officer",
      image: "/crew/member-5.jpg",
      social: {
        instagram: "#",
        linkedin: "#",
        behance: "#",
      },
    },
    {
        name: "Jaxlene Orne",
        role: "Chief Creative Officer",
        image: "/crew/member-6.jpg",
        social: {
          instagram: "#",
          linkedin: "#",
          behance: "#",
        },
      },
    {
      name: "Sienna Voss",
      role: "Chief Operations Officer",
      image: "/crew/member-1.jpg",
      social: {
        instagram: "#",
        linkedin: "#",
        behance: "#",
      },
    },
    {
      name: "Elara Winslow",
      role: "Chief Marketing Officer",
      image: "/crew/member-7.jpg",
      social: {
        instagram: "#",
        linkedin: "#",
        behance: "#",
      },
    },
  ]

  const philosophy = [
    {
      number: "01",
      title: "Meet & Align",
      description:
        "We start with a meet or call to understand your vision, goals, and needs. This is where we connect and align on the project's direction.",
    },
    {
        number: "",
        title: "",
        description:
            "",
        },
        {
        number: "",
        title: "",
        description:
          "",
    },
    {
        number: "",
        title: "",
        description:
          "",
    },
    {
      number: "02",
      title: "Research & Strategize",
      description:
        "Next, we dive into research to gather insights and shape a strategy that's tailored to your unique objectives and audience.",
    },
    {
        number: "",
        title: "",
        description:
          "",
    },
    
    {
        number: "",
        title: "",
        description:
          "",
    },
    {
        number: "",
        title: "",
        description:
          "",
    },
    {
      number: "03",
      title: "Execute & Deliver",
      description:
        "Finally, we bring your vision to life with our expertise in design, development, and marketing strategies.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-emerald-950 py-24 text-white md:py-32">
        <div className="container mx-auto flex flex-col items-center text-center">
                <h1 className=" text-6xl font-bold tracking-tighter">
                    <span className='sm:text-7xl md:text-[140px] lg:text-[180px] lg:mr-[170px]'>about our</span>
                    <br />
                    <span className='lg:ml-[370px] sm:text-7xl md:text-[140px] lg:text-[180px] mt-10'>agency</span>
                </h1>
            <div className="items-center justify-center lg:justify-start w-full">
                <p className="max-w-lg text-lg font-medium px-20 text-justify mt-10 lg:ml-[50px] text-zinc-300">
                    Our mission is to deliver exceptional solutions that resonate with our clients.
                    Discover what sets us apart in the digital landscape.
                </p>
            </div>
        </div>
      </section>

      {/* Our DNA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Diamond className="h-6 w-6 fill-emerald-950" />
            <h2 className="text-2xl font-medium">Our DNA</h2>
          </div>
          <div className="grid gap-20 justify-between p-4 lg:grid-cols-2">
            <div className="space-y-6 mb-10">
              <p className="text-xl font-medium">
                Inkoperations Media was founded with a vision to empower brands through creativity and innovation. Our core
                values of collaboration, integrity, and excellence drive our mission to deliver tailored solutions that
                not only meet client needs but also inspire and engage their audiences.
              </p>
              <p className="text-xl font-medium">
                We are committed to making a meaningful impact in the digital landscape, ensuring every project reflects
                our passion for quality and creativity.
              </p>
              <Button type="submit" className="rounded-full border border-black text-black bg-transparent px-10 py-6 hover:bg-emerald-950 hover:text-white">
                See what we do
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8 justify-end lg:ml-20">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2 text-center">
                  <div className="text-4xl font-medium md:text-5xl lg:text-6xl">{stat.number}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Crew Section */}
      <section className="py-12 md:py-18 bg-zinc-50">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Diamond className="h-6 w-6 fill-emerald-950" />
            <h2 className="text-2xl font-medium">Meet the crew</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="aspect-[3/4] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
                <div className="flex gap-4">
                  <Link href={member.social.instagram} className="hover:text-muted-foreground">
                    <span className="sr-only">Instagram</span>
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        fill="currentColor"
                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                      />
                    </svg>
                  </Link>
                  <Link href={member.social.linkedin} className="hover:text-muted-foreground">
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        fill="currentColor"
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      />
                    </svg>
                  </Link>
                  <Link href={member.social.behance} className="hover:text-muted-foreground">
                    <span className="sr-only">Behance</span>
                    <svg viewBox="0 0 24 24" className="h-6 w-6">
                      <path
                        fill="currentColor"
                        d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-18">
        <div className="container mt-10 mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Diamond className="h-6 w-6 fill-emerald-950" />
            <h2 className="text-2xl font-medium">Our philosophy</h2>
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {philosophy.map((step) => (
              <div key={step.number} className="space-y-4">
                <div className="text-4xl font-medium md:text-5xl lg:text-6xl">{step.number}</div>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-18">
        <div className="container mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Diamond className="h-6 w-6 fill-emerald-950" />
                <h2 className="text-2xl font-medium">Say hello</h2>
              </div>
              <p className="mb-8 text-xl medium px-7">
                Have questions or ready to start a project?
                <br/> Drop us a line! We're here to chat, brainstorm,
                <br/>and help bring your vision to life.
              </p>
              <Button type="submit" className="rounded-full border mt-5 border-black text-black bg-transparent px-10 py-6 hover:bg-emerald-950 hover:text-white">
                Contact Us
              </Button>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-[12rem] font-bold leading-none text-emerald-950">ink.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

