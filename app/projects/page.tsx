"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "railway-mitra",
      title: "RailwayMitra",
      description:
        "Addressed noisy and language limited announcements at Indian platforms by leveraging WhisperX (STT), ElevenLabs-TTS and MBART translator for efficient speech-to-speech translation.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["ReactJS", "TailwindCSS", "Selenium", "FastAPI", "Python"],
      category: "web",
    },
    {
      id: "stock-watch",
      title: "StockWatch",
      description:
        "Stock recommendation website and app built using an ensemble of recommendation models (FinBERT, FinGAT, LightGCN) with DeepFace authentication for secure login.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "TailwindCSS", "Node", "MongoDB", "Python", "FastAPI"],
      category: "web",
    },
    {
      id: "solar-energy",
      title: "Solar Energy Prediction",
      description:
        "Research paper leveraging weather and AQI data for solar energy forecasting using ML and Deep Learning. Achieved R² of 0.9691 using ConvLSTM2D.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "ML", "Deep Learning", "Research"],
      category: "research",
    },
    {
      id: "nbtest",
      title: "NBTest",
      description:
        "A pytest plugin for automated regression test generation in ML-oriented Jupyter notebooks, enhancing reproducibility and quality assurance in data science workflows.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "pytest", "Jupyter", "ML"],
      category: "research",
    },
    {
      id: "cibil-report",
      title: "CIBIL Report Generator",
      description:
        "Automated CIBIL Report generation using optimized LLM-driven pipeline, reducing generation time and enhancing accuracy with JSON-based context processing.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "LLM", "JSON", "Automation"],
      category: "ml",
    },
    {
      id: "hr-chatbot",
      title: "HR AI Chatbot",
      description:
        "Enhanced HR AI Chatbot by integrating advanced conversational memory, improving context retention and accuracy in chatbot responses.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "LLM", "NLP", "Chatbot"],
      category: "ml",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ml", name: "Machine Learning" },
    { id: "research", name: "Research" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

