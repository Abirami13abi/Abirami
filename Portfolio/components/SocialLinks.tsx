import { Github, Linkedin, Twitter } from 'lucide-react'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={className}>
      <a href="https://github.com" className="text-white hover:text-teal-400">
        <Github className="w-6 h-6" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-teal-400">
        <Linkedin className="w-6 h-6" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://twitter.com" className="text-white hover:text-teal-400">
        <Twitter className="w-6 h-6" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  )
}

