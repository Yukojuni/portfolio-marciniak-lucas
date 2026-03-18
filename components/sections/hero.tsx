"use client"

import { Capsule } from "@/components/ui/capsule"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,255,0.03)_1px,transparent_0)] bg-[length:32px_32px]" />
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Capsules */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Capsule variant="star" />
            <Capsule>dév</Capsule>
            <Capsule>IA</Capsule>
            <Capsule>data</Capsule>
            <Capsule>code</Capsule>
            <Capsule variant="star" />
          </div>

          {/* Main heading */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Lucas Marciniak
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-[family-name:var(--font-display)]">
            Développeur IA & Data
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Étudiant en informatique passionné par l'intelligence artificielle et l'analyse de données. 
            Je transforme les données en insights actionnables et les idées en solutions concrètes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#projets"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Voir mes projets
            </Link>
            <Link
              href="/cv-lucas-marciniak.pdf"
              className="px-8 py-3 border-2 border-primary text-foreground font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Télécharger mon CV
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/Yukojuni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucas-marciniak-884175264/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:lucas.marciniak@ynov.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  )
}
