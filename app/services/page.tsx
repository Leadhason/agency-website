import { Diamond } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ServicesList from "@/components/services-list"
import FAQSection from "@/components/faq-section"

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-emerald-950 py-24 text-white">
        <div className="container mx-auto flex flex-col items-center text-center">
            <h1 className="text-6xl font-bold tracking-tighter">
                <span className='sm:text-7xl md:text-[140px] lg:text-[200px] lg:mr-[190px]'>Services</span>
                <br />
                <span className='lg:ml-[500px] sm:text-7xl md:text-[140px] lg:text-[200px] mt-6'>we offer</span>
            </h1>
         <div className="items-center justify-center lg:justify-start w-full">
            <p className="max-w-lg text-lg font-medium text-justify px-14 mt-10 lg:ml-[50px] text-zinc-300">
              Bring your vision to life with bold branding, dynamic websites, smart marketing, and seamless design.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <ServicesList />

      {/* Contact Form */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-16">
            <Diamond className="h-6 w-6 fill-emerald-950" />
            <h2 className="text-2xl font-medium">Get in touch with us</h2>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </main>
  )
}

