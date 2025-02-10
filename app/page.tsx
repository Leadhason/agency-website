import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Projects from '@/components/featured-projects'
import TrustedBy from '@/components/trusted-by'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'


export default function Home() {
  return (
    <main className='flex flex-col justify-center min-h-screen py-2'>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <TrustedBy />
      <CTA />
      
    </main>
  )
}

