
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-muted-foreground">
            <p className="font-mono text-sm">
              © 2024 Sylvester Asoh. Built with React & TypeScript.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:sylvesterasoh.dev@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/sylvahh"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/sylvester-asoh"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
