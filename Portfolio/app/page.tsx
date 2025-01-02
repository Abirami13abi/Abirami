import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { SocialLinks } from '@/components/SocialLinks'

export default function Home() {
  return (
    <main className="bg-[#151515] min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SocialLinks className="py-8 flex justify-end gap-8" />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

