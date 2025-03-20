"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, []);

  const featuredProjects = [
    {
      id: "railway-mitra",
      title: "RailwayMitra",
      description:
        "Addressed noisy and language limited announcements at Indian platforms by leveraging WhisperX (STT), ElevenLabs-TTS and MBART translator for efficient speech-to-speech translation.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["ReactJS", "TailwindCSS", "Selenium", "FastAPI", "Python"],
    },
    {
      id: "stock-watch",
      title: "StockWatch",
      description:
        "Stock recommendation website and app built using an ensemble of recommendation models (FinBERT, FinGAT, LightGCN) with DeepFace authentication for secure login.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TailwindCSS", "Node", "MongoDB", "Python", "FastAPI"],
    },
    {
      id: "solar-energy",
      title: "Solar Energy Prediction",
      description:
        "Research paper leveraging weather and AQI data for solar energy forecasting using ML and Deep Learning. Achieved R² of 0.9691 using ConvLSTM2D.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "ML", "Deep Learning", "Research"],
    },
  ]

  const achievements = [
    {
      title: "Smart India Hackathon",
      description: "Winner of the Smart India Hackathon, the largest national level hackathon, under PS 1348",
      date: "December 2023",
    },
    {
      title: "Bajaj HackRx 4.0",
      description: "Winner at Bajaj HackRx 4.0, a national level hackathon out of more than 20,000 registrations",
      date: "July 2023",
    },
    {
      title: "HackX 1.0",
      description: "First place at HackX 1.0, a hackathon organized by SFIT college with over 1800 participants",
      date: "September 2023",
    },
    {
      title: "Unstoppable E-School Leaders",
      description: "Listed in Top 80 Unstoppable E-School Leaders 2024 by Unstop across all of India",
      date: "March 2024",
    },
  ]

  const skills = [
    "Python",
    "JavaScript",
    "C",
    "SQL",
    "ReactJS",
    "TailwindCSS",
    "Node.js",
    "MongoDB",
    "Tensorflow",
    "Transformers",
    "FastAPI",
    "Git",
  ]

  return (
    <div className="space-y-16">
      <section className="py-12">
        {/* <Terminal
          text="Hello, World. I am Varun Viswanath. AI/ML engineer and Full-stack developer. Welcome to my digital realm."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        /> */}
        <Terminal
          text="Hello, World. I am Varun Viswanath. SIH'23 Winner, ML Intern at CRIS and UIUC Research Intern. Welcome to my digital realm."
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={handleIntroComplete}
        />
        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              Learn more about me <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      {introComplete && (
        <>
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Achievements</h2>
          <Link href="/about" className="text-primary hover:underline inline-flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-hover bg-card p-4 rounded-md">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">{achievement.date}</div>
              <h3 className="text-lg font-bold mb-2 glitch" data-text={achievement.title}>
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>
      </>)}
    </div>
  )
}

