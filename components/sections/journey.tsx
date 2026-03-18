"use client"

import { Capsule } from "@/components/ui/capsule"
import { GraduationCap, Briefcase } from "lucide-react"

const education = [
  {
    title: "Master Informatique - Spécialisation IA & Data",
    institution: "Ynov Lyon",
    period: "2026 - 2028",
    description: "Formation approfondie en machine learning, deep learning et big data analytics.",
    current: true,
  },
  {
    title: "Bachelor Informatique - Spécialisation IA & Data",
    institution: "Ynov Lyon",
    period: "2023 - 2026",
    description: "Bases solides en algorithmique, programmation et bases de données.",
  },
  {
    title: "Baccalauréat Général",
    institution: "Lycée Simone Weil",
    period: "2023",
    description: "Mention Assez Bien - Spécialités Mathématiques et NSI.",
  },
]

const experiences = [
  {
    title: "Stagiaire Data Engineer",
    company: "Pango Sports",
    period: "2025 - 2026",
    description: "Analyse de données utilisateurs et création de dashboards pour le suivi des KPIs produit.",
    skills: ["Python", "SQL", "Power BI"],
  },
  {
    title: "Stagiaire Developper Web",
    company: "Orasi",
    period: "Été 2025",
    description: "Coordination d'une équipe de 4 étudiants sur un projet de prédiction de tendances e-commerce.",
    skills: ["Leadership", "ML", "Git"],
  },
]

export function JourneySection() {
  return (
    <section id="parcours" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              Parcours
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Mon parcours académique et mes premières expériences professionnelles.
          </p>

          {/* Timeline section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  Formation
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                  >
                    {item.current && (
                      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
                    )}
                    <div className="pb-6">
                      <span className="text-sm text-primary font-medium">{item.period}</span>
                      <h4 className="font-semibold mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                  Expériences
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm text-primary font-medium">{item.period}</span>
                    <h4 className="font-semibold mt-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.skills.map((skill) => (
                        <Capsule key={skill} className="text-xs">
                          {skill}
                        </Capsule>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Looking for */}
              <div className="mt-8 p-5 bg-primary/5 border-2 border-primary/20 rounded-xl">
                <p className="text-sm font-medium text-primary mb-2">
                  Recherche active
                </p>
                <p className="text-sm text-muted-foreground">
                  Je suis à la recherche d&apos;une <strong className="text-foreground">alternance</strong> à partir de septembre 2026 
                  dans le domaine de la data ou de l&apos;IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
