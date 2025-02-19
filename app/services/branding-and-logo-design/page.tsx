import OtherServices from '@/components/otherservices';
import { Diamond } from 'lucide-react';
import Image from 'next/image';

export default function BrandingPage() {
  return (
    <>
      <main>
        {/*Hero*/}
        <section className="bg-emerald-950 py-20 text-white md:py-32">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold tracking-tighter">
                <span className='sm:text-7xl md:text-[180px] lg:text-[200px] lg:mr-[190px]'>Branding</span>
                <br />
                <span className='lg:ml-[500px] sm:text-7xl md:text-[180px] lg:text-[200px] mt-10'>& Logos</span>
              </h1>
            </div>
            <div className="items-center justify-center lg:justify-bottom w-full">
              <p className="max-w-lg text-lg font-medium text-justify px-20 mt-10 lg:ml-[50px] text-zinc-300">
                By focusing on usability, we create websites and apps that are both beautiful and easy to use.
              </p>
            </div>
          </div>
        </section>

        <section className="p-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full h-full space-x-20 justify-between">
            <div className="space-y-8 flex flex-col h-full  justify-between">
              <div className="flex items-center gap-2 -mb-10">
                <Diamond className="h-8 w-8 fill-emerald-950" />
                <h2 className="text-2xl font-medium">Service Overview</h2>
              </div>
              <div className="space-y-12 text-lg font-medium p-10">
                <p>
                  <ul className='mx-5 text-md list-disc'>
                    <li>Brand positioning and strategy</li>
                    <li>Logo and visual identity design</li>
                    <li>Tone of voice and messaging</li>
                    <li>Brand guidelines development</li>
                    <li>Brand implementation and management</li>
                  </ul>
                </p>
                <p className='text-justify'>
                 At Barrique Agency, we understand that a strong brand is the foundation of any successful business. Our team works closely with you to develop a comprehensive brand strategy that reflects your values, vision, and unique market position. From defining your brand’s mission and tone of voice to designing a memorable logo and cohesive visual identity, we ensure your brand stands out. We dive deep into market research, competitor analysis, and audience insights to create a brand that resonates, leaving a lasting impact on your customers.
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center itemns-center">
                <Image
                  src="/webdev-3.jpeg"
                  alt="Laptop showing website design"
                  width={800}
                  height={800}
                  className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <OtherServices currentService="Branding & Logo Design" />
      </main>
    </>
  );
}
