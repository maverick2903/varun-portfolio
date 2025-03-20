"use client"

import { useState, useCallback } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)
  const handleIntroComplete = useCallback(() => {
      setIntroComplete(true)
    }, []);
  
  const handleBioComplete = useCallback(() => {
    setBioComplete(true);
  }, []);

  const education = {
    institution: "SVKM's Dwarkadas J Sanghvi College of Engineering",
    location: "Mumbai, India",
    degree: "B.Tech. in Computer Engineering (Pursuing)",
    gpa: "9.43 CGPA",
    date: "Dec. 2021",
  }

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

  const skills = [
    { category: "Languages", items: ["Python", "C", "JavaScript", "SQL", "LaTeX"] },
    {
      category: "Developer Tools",
      items: ["Colab", "Jupyter Notebook", "Postman", "Visual Studio Code", "Git", "Conda", "Hugging Face"],
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "Express", "NodeJS", "MongoDB", "ReactJS", "Material UI", "Chakra UI", "TailwindCSS"],
    },
    {
      category: "Machine Learning",
      items: [
        "Tensorflow",
        "Transformers",
        "Pandas",
        "NLTK",
        "Scikit-Learn",
        "Streamlit",
        "FastAPI",
        "OpenAI",
        "Langchain",
      ],
    },
  ]

  const achievements = [
    "Winner of the Smart India Hackathon, the largest national level hackathon, under PS 1348 (December 2023).",
    "Winner at Bajaj HackRx 4.0, a national level hackathon out of more than 20,000 registrations (July 2023).",
    "First place at HackX 1.0, a hackathon organized by SFIT college with over 1800 participants (September 2023).",
    "Listed in Top 80 Unstoppable E-School Leaders 2024 by Unstop across all of India (March 2024).",
  ]

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text="Initializing personal profile... Access granted. Loading bio data..."
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={handleIntroComplete}
        />

        {introComplete && (
          <Terminal
            text="Hello, I'm Varun Viswanath. A Computer Engineering student and Machine Learning enthusiast with a passion for building innovative solutions. I've won multiple hackathons including Smart India Hackathon '23 and Bajaj HackRx 4.0, and I'm currently a Research Intern at UIUC, and a Machine Learning Intern at CRIS."
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={handleBioComplete}
          />
        )}
      </section>

      {bioComplete && (
        <>
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
                    <span className="text-primary">institution:</span> {education.institution}
                  </p>
                  <p>
                    <span className="text-primary">location:</span> {education.location}
                  </p>
                  <p>
                    <span className="text-primary">degree:</span> {education.degree}
                  </p>
                  <p>
                    <span className="text-primary">gpa:</span> {education.gpa}
                  </p>
                  <p>
                    <span className="text-primary">date:</span> {education.date}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience Timeline</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company.split(",")[0]}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">company:</span> {exp.company}
                      </p>
                      <p>
                        <span className="text-primary">period:</span> {exp.period}
                      </p>
                      {exp.location && (
                        <p>
                          <span className="text-primary">location:</span> {exp.location}
                        </p>
                      )}
                      <div className="mt-2">
                        <span className="text-primary">responsibilities:</span>
                        <ul className="mt-1 space-y-1">
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
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">System Specs</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /proc/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">achievements.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /awards/achievements.txt
                </p>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ./send_message.sh
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">name:</span>
                      </label>
                      <Input id="name" placeholder="Enter your name" className="bg-background border-border" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">email:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">message:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ifconfig
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">github0:</p>
                      <Link
                        href="https://github.com/maverick2903"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Github size={16} />
                        github.com/maverick2903
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin0:</p>
                      <Link
                        href="https://linkedin.com/in/varun-viswanath-10a3b0222/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                      >
                        <Linkedin size={16} />
                        https://linkedin.com/in/varun-viswanath-10a3b0222/
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">mail0:</p>
                      <Link
                        href="mailto:varunvis2903@gmail.com"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        varunvis2903@gmail.com
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">phone0:</p>
                      <Link
                        href="tel:9819971058"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Phone size={16} />
                        9819971058
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

