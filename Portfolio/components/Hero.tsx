import Image from 'next/image'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative pt-16 pb-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold">
            Nice to meet you! <br />
            I'm <span className="underline decoration-teal-400">Abirami M.</span>
          </h1>
          <p className="text-gray-400 max-w-[540px] text-lg">
            I'm an Electronics and Communication Engineering student passionate about 
            digital electronics, VLSI design, and embedded systems development.
          </p>
          <Button variant="ghost" className="text-white border-b-2 border-teal-400 rounded-none px-0 hover:text-teal-400">
            CONTACT ME
          </Button>
        </div>
        <div className="relative lg:absolute top-0 right-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0782%20copy.jpg-QJ7xGGs5tsMoa6modbFhgSH3pD7Ffe.jpeg"
            alt="Abirami M"
            width={445}
            height={720}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}

