import Image from 'next/image'
import { Button } from './ui/button'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Smart Car Parking System',
      description: 'An automated system for efficient parking management using sensors and microcontrollers. Features real-time monitoring and automated slot allocation.',
      technologies: ['Embedded C', 'IoT', 'Sensors', 'LCD Display'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-etQXCE4Z5R3wpzGgtVeUJkSHbl6Kwi.png'
    },
    {
      title: 'RFID Based Attendance System',
      description: 'Automated attendance tracking system using RFID technology for educational institutions. Includes mobile app interface and real-time synchronization.',
      technologies: ['RFID', 'Database', 'Mobile App', 'IoT'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zKYoxQX3EQjSOlcXlmAm8rJaqVMhjE.png'
    },
    {
      title: 'Dry Handwash Using Fog',
      description: 'Water-saving innovation using fog technology for effective hand sanitization. Implements UV sterilization and automated dispensing.',
      technologies: ['Hardware Design', 'Control Systems', 'UV Technology'],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241021_141055.jpg-VJA3NnqElFSexc8JZzaI8C0x4a6Un3.jpeg'
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <Button variant="ghost" className="text-white border-b-2 border-teal-400 rounded-none px-0 hover:text-teal-400">
            CONTACT ME
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-teal-500/50 transition-all duration-500"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 space-y-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="ghost" className="text-white border-b-2 border-teal-400 rounded-none px-0 hover:text-teal-400">
                        VIEW PROJECT
                      </Button>
                      <Button variant="ghost" className="text-white border-b-2 border-teal-400 rounded-none px-0 hover:text-teal-400">
                        VIEW CODE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

