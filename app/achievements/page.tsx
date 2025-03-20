import { Trophy } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      id: "sih-2023",
      title: "Smart India Hackathon Winner",
      description: "Winner of the Smart India Hackathon, the largest national level hackathon, under PS 1348.",
      date: "December 2023",
    },
    {
      id: "bajaj-hackrx",
      title: "Bajaj HackRx 4.0 Winner",
      description: "Winner at Bajaj HackRx 4.0, a national level hackathon out of more than 20,000 registrations.",
      date: "July 2023",
    },
    {
      id: "hackx-1",
      title: "HackX 1.0 First Place",
      description: "First place at HackX 1.0, a hackathon organized by SFIT college with over 1800 participants.",
      date: "September 2023",
    },
    {
      id: "unstop-leader",
      title: "Top 80 Unstoppable E-School Leaders",
      description: "Listed in Top 80 Unstoppable E-School Leaders 2024 by Unstop across all of India.",
      date: "March 2024",
    },
    {
      id: "aisd-2024",
      title: "Second Best Paper Award at AISD 2024",
      description:
        "Received the Second Best Paper award at AISD 2024 for research on predicting solar energy generation with machine learning.",
      date: "2024",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">achievements.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> ls -la /awards
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="card-hover bg-card p-6 rounded-md h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-primary" size={24} />
              <h3 className="text-lg font-bold glitch" data-text={achievement.title}>
                {achievement.title}
              </h3>
            </div>
            <div className="flex items-center text-xs text-muted-foreground mb-3">{achievement.date}</div>
            <p className="text-sm text-muted-foreground flex-grow">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

