"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Github, Mail, Linkedin, Twitter, Medal } from "lucide-react"
import { Badge } from "./components/utils/badge"
import { Button } from "./components/utils/button"
import Link from "next/link"
import type React from "react"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const aboutRef = useRef<HTMLElement>(null)
  const experienceRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen bg-[#0a0d16] relative">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-white p-2 bg-[#0f1624] rounded-md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside className={`
        fixed w-[450px] h-screen p-12 flex flex-col text-white bg-[#0a0d16] z-40
        transform transition-transform duration-300 ease-in-out
        md:transform-none
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Shivanshu Jaiswal</h1>
          <p className="text-1xl font-semibold">
            Computer Science Engineering Student at <br />
            Lovely Professional University, Punjab
          </p>
        </div>

        <nav className="mt-12 space-y-4">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="flex items-center space-x-4 text-gray-400 hover:text-white w-full"
          >
            <div className="h-[1px] w-6 bg-gray-700" />
            <span className="text-sm">ABOUT</span>
          </button>
          <button
            onClick={() => scrollToSection(experienceRef)}
            className="flex items-center space-x-4 text-gray-400 hover:text-white w-full"
          >
            <div className="h-[1px] w-6 bg-gray-700" />
            <span className="text-sm">EXPERIENCE</span>
          </button>
          <button
            onClick={() => scrollToSection(projectsRef)}
            className="flex items-center space-x-4 text-gray-400 hover:text-white w-full"
          >
            <div className="h-[1px] w-6 bg-gray-700" />
            <span className="text-sm">PROJECTS</span>
          </button>
          <button
            onClick={() => scrollToSection(skillsRef)}
            className="flex items-center space-x-4 text-gray-400 hover:text-white w-full"
          >
            <div className="h-[1px] w-6 bg-gray-700" />
            <span className="text-sm">SKILLS</span>
          </button>
        </nav>

        <div className="mt-auto flex space-x-4">
  <Link href="https://github.com/Shivanshu840" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-400 hover:text-white"
    >
      <Github className="h-5 w-5" />
    </Button>
  </Link>

  <Link href="mailto:rajshivanshu544@gmail.com">
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-400 hover:text-white"
    >
      <Mail className="h-5 w-5" />
    </Button>
  </Link>

  <Link href="https://www.linkedin.com/in/shivanshu-raj-aa2234250/" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-400 hover:text-white"
    >
      <Linkedin className="h-5 w-5" />
    </Button>
  </Link>

  <Link href="https://x.com/ShivanshuR49080" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-400 hover:text-white"
    >
      <Twitter className="h-5 w-5" />
    </Button>
  </Link>

  <Link href="https://yourportfolio.com/achievements" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-400 hover:text-white"
    >
      <Medal className="h-5 w-5" />
    </Button>
  </Link>
</div>
      </aside>
            {/* Main Content */}
            <main className={`
        ml-0 md:ml-[650px] flex-1 p-6 md:p-12 text-white max-w-[1200px]
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'blur-sm md:blur-none' : ''}
      `}>
        {/* About Section */}
        <section ref={aboutRef} className="mb-16 md:mb-32">
          <h2 className="text-xl font-semibold mb-6">ABOUT</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I began my journey in technology in 2022 with my first{" "}
              <span className="text-white font-semibold">Hello World</span> program, which opened my eyes to the vast{" "}
              <span className="text-white font-semibold">potential</span> of technology and inspired me to pursue it as
              a career. In college, I deepened my understanding of computers, focusing on{" "}
              <span className="text-white font-semibold">web</span> development.
            </p>
            <p>
              This exploration naturally led me to delve into <span className="text-white font-semibold">app</span>{" "}
              development, and today, I proudly present a portfolio of projects that reflect my journey in{" "}
              <span className="text-white font-semibold">Web and App</span> development.
            </p>
            <p>
              While <span className="text-white font-semibold">coding is my primary hobby</span>, offering endless
              enjoyment through its problem-solving nature, my interests extend beyond programming.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="mb-16 md:mb-32">
          <h2 className="text-xl font-semibold mb-6">EXPERIENCE</h2>
          <div className="space-y-8">
            <div className="rounded-lg bg-[#0f1624] p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Soul AI
                    <Link href="#" className="text-gray-400 hover:text-white">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </h3>
                  <p className="text-gray-400">FREELANCER</p>
                </div>
                <span className="text-gray-400">OCTOBER 2024 - PRESENT</span>
              </div>
              <p className="text-gray-300 mb-4">
                Created optimized AI training protocols, resulting in improved response times for predictive analytics tasks and reducing latency by over two seconds per transaction on average.
                {" "}
                Reviewed and ensured data quality across multiple projects, optimizing workflows, and boosting overall efficiency.
                {" "}
                Audited and curated 200+ community contributions, ensuring high-quality data standards and bolstering AI model performance and scalability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "React", "Web3", "TeamWork"].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-[#193049] text-[#4fd1c5] hover:bg-[#234567] text-xs md:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="mb-16 md:mb-32">
          <h2 className="text-xl font-semibold mb-6">PROJECTS</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.title} className="rounded-lg bg-[#0f1624] p-4 md:p-8 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={80}
                      height={80}
                      className="rounded-lg w-full md:w-auto max-w-[200px] object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold flex items-center text-[#4fd1c5] gap-2">
                        {project.title}
                        <Link href="https://medi-meet-web.vercel.app/" className="text-gray-400 hover:text-white">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm md:text-base">{project.description}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{project.date}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-[#193049] text-[#4fd1c5] hover:bg-[#234567] text-xs md:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
                {/* Skills Section */}
                <section ref={skillsRef} className="mb-16 md:mb-32">
          <h2 className="text-xl font-semibold mb-6">TECHNICAL SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-[#193049] text-[#4fd1c5] hover:bg-[#234567] text-xs md:text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "MediMeet",
    description:
      "Revolutionizing healthcare through our secure telemedicine platform, connecting patients with certified healthcare professionals via video consultations. We eliminate geographical barriers and reduce wait times, making quality medical care accessible from the comfort of home while maintaining the highest standards of security and confidentiality.",
    date: "DEC 2024",
    image: "/medimeet.png",
    technologies: [
      "Typescript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "Docker",
      "AWS-EC2",
      "WebSockets",
      "WebRtc",
      "CloudFlare-Worker",
      "TurboRepo",
      "Messaging Queues",
    ],
  },
  {
    title: "HospitEase",
    description:
      "Led development of this disaster management mobile app, implementing critical features like resource requests, admin dashboard, SOS button, and dynamic heatmaps, as the sole app developer.",
    date: "Sept. 2023",
    image: "/placeholder.svg",
    technologies: ["React Native", "Firebase", "Tensorflow", "Leadership"],
  },
]

const skills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "C/C++",
  "Python",
  "React.js",
  "Next.js",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Prisma",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Docker",
  "Redis",
  "AWS-EC2",
  "AWS S3",
  "Postman",
  "SEO",
]