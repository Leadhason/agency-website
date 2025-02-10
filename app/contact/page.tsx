"use client"

import { Diamond } from "lucide-react"
import { ArrowUpRight, Mail, Phone, Home } from "lucide-react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number must be at least 6 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    })
  
    async function onSubmit(values: z.infer<typeof formSchema>) {
      // Handle form submission
      console.log(values)
    }
    return (
        <main className="">
        {/* Hero Section */}
            <section className="bg-emerald-950 py-24 px-5 sm:px-10 text-white md:py-32">
                <div className="container mx-auto flex flex-col items-center text-center">
                    <h1 className="text-6xl font-bold tracking-loose lg:-ml-[200px]">
                        <span className='sm:text-7xl md:text-[140px] lg:text-[180px] lg:-ml-[230px]'>connect</span>
                        <br />
                        <span className='lg:ml-[400px] sm:text-7xl md:text-[140px] lg:text-[180px] mt-10'>& create</span>
                    </h1>
                <div className="items-center justify-center lg:justify-center py-10 w-full">
                    <p className="max-w-lg text-lg font-medium px-20 text-justify text-zinc-300">
                        Let’s bring your vision to life. Reach out, and let’s create something impactful together.
                    </p>
                </div>
                </div>
            </section>

            {/*Form Section*/}
            <section>
                <div className="container grid gap-8 py-24 md:grid-cols-2 md:gap-12 lg:gap-16 mx-auto">
                    <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        <Diamond className="h-6 w-6 fill-emerald-950" />
                        <h2 className="text-2xl font-medium">Let's chat</h2>
                    </div>

                    <div className="space-y-4 text-xl font-medium">
                        <p className="">
                        We're excited to hear from you! Reach out to us, and let's discuss how we can collaborate to turn your
                        ideas into reality.
                        </p>
                        <p className="">
                        Fill out the form, and we'll get back to you as soon as possible to discuss how we can help bring your
                        ideas to life.
                        </p>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        <span>info@inkoperations.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        <span>(123) 456-7890</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Home className="h-5 w-5" />
                        <address className="not-italic">
                            Pristige Hostel, Deduako,
                            <br />
                            Kumasi, Ghana
                        </address>
                        </div>
                    </div>
                    </div>

                    <div className="relative">
                    <div className="absolute right-0 top-0 flex gap-4">
                        <Link
                        href="https://instagram.com"
                        className="flex items-center hover:text-muted-foreground transition-transform hover:translate-y-1 hover:translate-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        INSTAGRAM
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                        <Link
                        href="https://linkedin.com"
                        className="flex items-center hover:text-muted-foreground transition-transform hover:translate-y-1 hover:translate-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        LINKEDIN
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                        <Link
                        href="https://behance.com"
                        className="flex items-center transition-transform hover:translate-y-1 hover:translate-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        BEHANCE
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-16 space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    placeholder="Name"
                                    {...field}
                                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-zinc-900"
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    {...field}
                                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-zinc-900"
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                    placeholder="Phone"
                                    type="tel"
                                    {...field}
                                    className="border-0 border-b border-zinc-200 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-zinc-900"
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Textarea
                                    placeholder="Message"
                                    {...field}
                                    className="min-h-[150px] border-0 border-b border-zinc-200 rounded-none px-0 py-6 text-lg focus-visible:ring-0 focus-visible:border-zinc-900 resize-none"
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="rounded-full border border-black text-black bg-transparent px-10 py-6 hover:bg-emerald-950 hover:text-white">
                            submit
                        </Button>
                        </form>
                    </Form>
                    </div>
                </div>
            </section>
        </main>
    )
}


