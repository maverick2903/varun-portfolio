"use client"

import { useState, useCallback } from "react"
import { Terminal } from "@/components/terminal"

export default function ExperiencePage() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, []);

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Centre for Railway Information Systems, Ministry of Railways",
      period: "December 2024 - Current",
      location: "Delhi, India (remote)",
      description: [
        "Training Tri branched LSTM-based models for type & subtype classification of passenger complaints asked on RailMadad platform which handles 10000+ queries daily.",
        "Generating 1 million synthetic high quality complaints using Gemini and Qwen for data augmentation.",
      ],
    },
    {
      title: "Research Intern",
      company: "University of Illinois Urbana-Champaign",
      period: "March 2024 - Current",
      location: "",
      description: [
        "Developed NBTest, a pytest plugin for automated regression test generation in ML-oriented Jupyter notebooks, enhancing reproducibility and quality assurance in data science workflows.",
        "Designed an end-to-end pipeline that processed over 300K Kaggle notebooks, generating an average of 7.56 dynamic assertions per notebook with 92.1% pass rates across runs.",
        "Integrated statistical techniques like Hoeffding's and Chebyshev's inequalities to minimize flakiness in assertions while maintaining high fault-detection effectiveness.",
      ],
    },
    {
      title: "Business Intelligence Unit Intern",
      company: "Piramal Capital and Housing Finance Limited",
      period: "June 2024 - August 2024",
      location: "Mumbai, India",
      description: [
        "Automated CIBIL Report generation using optimized LLM-driven pipeline, reducing generation time and enhancing accuracy with JSON-based context processing.",
        "Enhanced HR AI Chatbot by integrating advanced conversational memory, improving context retention and accuracy in chatbot responses.",
        "Optimized Hallucination Detection for RAG by using open source Lynx model, cutting response time by 50%+ while maintaining reasoning accuracy.",
      ],
    },
  ]

  return (
    <div className="space-y-12">
      <section>
        <Terminal
          text="Loading professional experience data... Access granted."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={handleIntroComplete}
        />
      </section>

      {introComplete && (
        <>
        <section>
          <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">{exp.company.split(",")[0]}.sh</div>
                </div>
                <div className="terminal-content">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                  </div>

                  <div className="mb-2">
                    <p className="mb-2">
                      <span className="text-primary">$</span> cat responsibilities.txt
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="terminal-window">
        <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">education.sh</div>
        </div>
        <div className="terminal-content">
            <p className="mb-1">
            <span className="text-primary">$</span> cat education_details.txt
            </p>
            <div className="mb-2">
            <p>
                <span className="text-primary">institution:</span> SVKM's Dwarkadas J Sanghvi College of Engineering
            </p>
            <p>
                <span className="text-primary">location:</span> Mumbai, India
            </p>
            <p>
                <span className="text-primary">degree:</span> B.Tech. in Computer Engineering (Pursuing)
            </p>
            <p>
                <span className="text-primary">gpa:</span> 9.43 CGPA
            </p>
            <p>
                <span className="text-primary">date:</span> Dec. 2021
            </p>
            </div>
        </div>
        </div>
        </section>
        </>
      )}

      
    </div>
  )
}

