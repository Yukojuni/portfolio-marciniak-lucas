"use client"

import { Capsule } from "@/components/ui/capsule"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              Contact
            </h2>
          </div>

          <p className="text-muted-foreground mb-12">
            Une opportunité, un projet ou juste envie d’échanger ?  
            Le plus simple reste de m’envoyer un message
          </p>

          {/* Main CTA */}
          <a
            href="mailto:lucas.marciniak@ynov.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            lucas.marciniak@ynov.com
          </a>

          {/* Infos secondaires */}
          <div className="flex flex-col items-center gap-4 mt-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Lyon, France
            </div>

            {/* Réseaux */}
            <div className="flex gap-4 mt-4">
              <Link
                href="https://github.com/YukoJuni"
                target="_blank"
                className="p-3 border border-border rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/lucas-marciniak-884175264/"
                target="_blank"
                className="p-3 border border-border rounded-full hover:border-primary hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Disponibilité */}
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
            <p className="text-sm">
              <span className="font-medium text-primary">Disponible pour une alternance</span>
              <br />
              <span className="text-muted-foreground">
                Septembre 2026 · 2 semaines entreprise / 1 semaine école
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}