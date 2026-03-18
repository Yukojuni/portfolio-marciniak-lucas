"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
              Lucas<span className="text-primary">.</span>
            </Link>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Yukojuni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/lucas-marciniak-884175264/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:lucas.marciniak@ynov.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} Lucas Marciniak. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
