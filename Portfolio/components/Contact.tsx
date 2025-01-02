import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export function Contact() {
  return (
    <section className="py-20 bg-[#242424]">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-400">
          I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
        </p>
        <form className="space-y-8">
          <Input
            type="text"
            placeholder="NAME"
            className="bg-transparent border-b border-gray-600 rounded-none focus:border-teal-400 px-0"
          />
          <Input
            type="email"
            placeholder="EMAIL"
            className="bg-transparent border-b border-gray-600 rounded-none focus:border-teal-400 px-0"
          />
          <Textarea
            placeholder="MESSAGE"
            className="bg-transparent border-b border-gray-600 rounded-none focus:border-teal-400 px-0 min-h-[150px]"
          />
          <Button variant="ghost" className="text-white border-b-2 border-teal-400 rounded-none px-0 hover:text-teal-400">
            SEND MESSAGE
          </Button>
        </form>
      </div>
    </section>
  )
}

