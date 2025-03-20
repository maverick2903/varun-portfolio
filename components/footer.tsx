import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Varun Viswanath. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/maverick2903"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/varun-viswanath-10a3b0222/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:varunvis2903@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:9819971058" className="text-muted-foreground hover:text-primary transition-colors">
              <Phone size={20} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

