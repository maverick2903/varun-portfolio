"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "railway-mitra": {
      title: "RailwayMitra",
      description:
        "Addressed noisy and language limited announcements at Indian platforms by leveraging WhisperX (STT), ElevenLabs-TTS and MBART translator for efficient speech-to-speech translation.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["ReactJS", "TailwindCSS", "Selenium", "FastAPI", "Python"],
      category: "web",
      github: "https://github.com/maverick2903/RailwayMitra",
      demo: "https://railway-mitra.vercel.app",
      longDescription:
        "RailwayMitra addresses the challenge of noisy and language-limited announcements at Indian railway platforms. The project leverages WhisperX for speech-to-text conversion, MBART for translation, and ElevenLabs for text-to-speech synthesis to create an efficient speech-to-speech translation system. The platform includes a Gemini-based chatbot capable of answering queries in 15+ languages and handling location detection with IndicNER and Google Maps integration. Additionally, it implements a custom IVRS system enabling railway authorities to transmit announcements through AI calls and SMS, making railway information more accessible to all passengers regardless of language barriers.",
    },
    "stock-watch": {
      title: "StockWatch",
      description:
        "Stock recommendation website and app built using an ensemble of recommendation models (FinBERT, FinGAT, LightGCN) with DeepFace authentication for secure login.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "TailwindCSS", "Node", "MongoDB", "Python", "FastAPI"],
      category: "web",
      github: "https://github.com/maverick2903/StockWatch",
      demo: "https://stock-watch-demo.vercel.app",
      longDescription:
        "StockWatch is a comprehensive stock recommendation platform that combines web and mobile interfaces with advanced AI models. The system utilizes an ensemble of recommendation models including FinBERT, FinGAT, and LightGCN to provide personalized stock recommendations. Security is enhanced through DeepFace authentication for secure login and signup. Key features include real-time interactive stock graph analysis, buying and selling recommendations, AI-driven portfolio customization, and a GenAI-based financial query chatbot. The platform helps users make informed investment decisions by analyzing market trends and providing personalized insights based on their investment preferences and risk tolerance.",
    },
    "solar-energy": {
      title: "Solar Energy Prediction",
      description:
        "Research paper leveraging weather and AQI data for solar energy forecasting using ML and Deep Learning. Achieved R² of 0.9691 using ConvLSTM2D.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "ML", "Deep Learning", "Research"],
      category: "research",
      github: "https://github.com/maverick2903/SolarEnergyPrediction",
      demo: "https://solar-energy-prediction.vercel.app",
      longDescription:
        "This research project focuses on predicting solar energy generation using machine learning techniques based on Air Quality Index (AQI) and weather features. The paper introduces innovative approaches to solar energy forecasting by incorporating environmental factors that affect solar panel efficiency. The research team achieved an impressive R² value of 0.9691 using ConvLSTM2D models, implementing novel techniques such as power transform normalization and zero-inflated modeling to improve prediction accuracy. The work was recognized with the Second Best Paper award at AISD 2024, highlighting its contribution to renewable energy research and sustainable power generation forecasting.",
    },
    nbtest: {
      title: "NBTest",
      description:
        "A pytest plugin for automated regression test generation in ML-oriented Jupyter notebooks, enhancing reproducibility and quality assurance in data science workflows.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "pytest", "Jupyter", "ML"],
      category: "research",
      github: "https://github.com/maverick2903/NBTest",
      demo: "https://nbtest-demo.vercel.app",
      longDescription:
        "NBTest is an innovative pytest plugin developed during a research internship at the University of Illinois Urbana-Champaign. The tool addresses the critical need for automated regression testing in machine learning-oriented Jupyter notebooks, enhancing reproducibility and quality assurance in data science workflows. The project features an end-to-end pipeline capable of processing over 300K Kaggle notebooks, generating an average of 7.56 dynamic assertions per notebook with impressive 92.1% pass rates across runs. A key innovation of NBTest is the integration of statistical techniques such as Hoeffding's and Chebyshev's inequalities to minimize flakiness in assertions while maintaining high fault-detection effectiveness, making it a valuable tool for ensuring the reliability of data science code.",
    },
    // "cibil-report": {
    //   title: "CIBIL Report Generator",
    //   description:
    //     "Automated CIBIL Report generation using optimized LLM-driven pipeline, reducing generation time and enhancing accuracy with JSON-based context processing.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   technologies: ["Python", "LLM", "JSON", "Automation"],
    //   category: "ml",
    //   github: "https://github.com/maverick2903/CIBILReportGenerator",
    //   demo: "https://cibil-report-generator.vercel.app",
    //   longDescription:
    //     "Developed during an internship at Piramal Capital and Housing Finance Limited, this project automates the generation of CIBIL Reports using an optimized LLM-driven pipeline. The system significantly reduces report generation time while enhancing accuracy through JSON-based context processing. The automation solution streamlines what was previously a manual and time-consuming process, allowing financial analysts to focus on higher-value tasks. The implementation includes sophisticated data extraction, processing, and formatting capabilities that maintain compliance with financial reporting standards while delivering consistent, error-free reports. This tool has become an essential component in the company's credit assessment workflow.",
    // },
    // "hr-chatbot": {
    //   title: "HR AI Chatbot",
    //   description:
    //     "Enhanced HR AI Chatbot by integrating advanced conversational memory, improving context retention and accuracy in chatbot responses.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   technologies: ["Python", "LLM", "NLP", "Chatbot"],
    //   category: "ml",
    //   github: "https://github.com/maverick2903/HRChatbot",
    //   demo: "https://hr-ai-chatbot.vercel.app",
    //   longDescription:
    //     "This project involved enhancing an existing HR AI Chatbot by integrating advanced conversational memory capabilities. The improved system demonstrates significantly better context retention and accuracy in chatbot responses, making it more effective for handling complex HR inquiries. The implementation leverages state-of-the-art natural language processing techniques to maintain conversation history and understand the nuances of HR-related questions. By incorporating sophisticated memory management, the chatbot can now handle multi-turn conversations, remember previous user inputs, and provide more coherent and contextually appropriate responses. This enhancement has made the HR chatbot a more valuable tool for employees seeking HR information and support.",
    // },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}

