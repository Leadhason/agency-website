import Link from "next/link";
import Image from 'next/image'
import { Diamond } from 'lucide-react'
import { Button } from "@/components/ui/button";

const services = [
  { name: "Web Development", path: "/services/web-development", image:"/webdev.jpeg" },
  { name: "Graphic Design", path: "/services/graphic-design", image:"/webdev-4.jpeg" },
  { name: "Shirt Printing", path: "/services/shirt-printing", image:"/webdev-2.jpeg" },
  { name: "Branding & Logo Design", path: "/services/branding-and-logo-design", image:"/webdev-3.jpeg" },
];

interface Props{
    currentService: string;
}

export default function OtherServices({ currentService }: Props) {
  const filteredServices = services.filter(service => service.name !== currentService);

  return (
    <section className="py-10 mb-20">
        <div className=" flex flex-col container mx-auto items-center justify-center">
            <div className="flex items-center text-center gap-2 mb-8">
                <Diamond className="h-8 w-8 fill-emerald-950" />
                <h2 className="text-2xl font-medium">Our Other Services</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3 mb-3 py-5">
                {filteredServices.map((services) => (
                    <div key={services.name} className="group space-y-3 mt-4  px-5"> 
                        <Link href={services.path} className="group ">
                            <div className="flex overflow-hidden rounded-none hover:scale-105 transition-transform">
                                <Image
                                src={services.image || "/placeholder.svg"}
                                alt={services.name}
                                width={900}
                                height={900}
                                className="object-cover"
                                />
                            </div>
                            <div className="flex mt-3 w-full">
                                <h3 className="text-2xl font-semibold text-center">{services.name}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex w-full items-center justify-center items-center text-center">
                <Link href='/services' className="">
                <Button className="rounded-full border border-black  justify-center text-black bg-transparent px-10 py-6 hover:bg-emerald-950 hover:text-white">
                        See all services
                    </Button>
                </Link>
            </div>
        </div>
    </section>
  );
}
