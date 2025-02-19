import Image from 'next/image'
import { Diamond } from 'lucide-react';
import OtherServices from '@/components/otherservices';



export default function GraphicDesignPage() {
    return (
        <main>
        {/* Hero Section */}
            <section className="bg-emerald-950 py-24 text-white md:py-32">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold tracking-tighter">
                <span className='sm:text-7xl md:text-[180px] lg:text-[210px] lg:mr-[200px]'>Graphic</span>
                <br />
                <span className='lg:ml-[500px] sm:text-7xl md:text-[180px] lg:text-[200px] mt-10'>Design</span>
              </h1>
            </div>
            <div className="items-center justify-center lg:justify-bottom w-full">
              <p className="max-w-lg text-lg font-medium text-justify px-24 mt-5 lg:ml-[50px] text-zinc-300">
                Bring your vision to life with bold, dynamic, smart graphics, and seamless design.
              </p>
            </div>
          </div>
        </section>

        <section className="service-overview p-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full h-full space-x-20 justify-between">
            <div className="space-y-8 flex flex-col h-full  justify-between">
              <div className="flex items-center gap-2 -mb-10">
                <Diamond className="h-8 w-8 fill-emerald-950" />
                <h2 className="text-2xl font-medium">Service Overview</h2>
              </div>
              <div className="space-y-12 text-lg font-medium p-10">
                <p>
                  <ul className='mx-5 text-md list-disc'>
                    <li>Marketing materials (brochures, business cards, flyers, etc.)</li>
                    <li>Social media graphics and ads</li>
                    <li>Eye-catching product packaging and merch design</li>
                    <li>Digital advertising design</li>
                    <li>Church flyer design</li>
                  </ul>
                </p>
                <p className='text-justify'>
                    Visual identity is key to standing out, and our expert graphic design team crafts compelling visuals that elevate your brand. We create cohesive branding, eye-catching marketing materials, and engaging digital graphics to leave a lasting impression. Our focus is on aesthetics, functionality, and brand storytelling to connect with your audience effectively. We refine designs based on your vision, industry trends, and data-driven insights to ensure you get maximum impact from every creative asset.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center itemns-center">
                <Image
                  src="/webdev-4.jpeg"
                  alt="Laptop showing website design"
                  width={800}
                  height={800}
                  className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Graphic Design"/>  
        </main>
    )
}