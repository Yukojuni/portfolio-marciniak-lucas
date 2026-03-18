"use client"

import { Capsule } from "@/components/ui/capsule"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Lucas a fait preuve d'une grande autonomie et d'une réelle capacité d'analyse lors de son stage. Ses dashboards ont transformé notre façon de suivre nos KPIs.",
    author: "Marie Dupont",
    role: "Product Manager",
    company: "Startup Tech",
  },
  {
    quote: "Un étudiant remarquable, toujours curieux et impliqué. Sa maîtrise des outils de data science et son esprit d'équipe en font un atout pour toute organisation.",
    author: "Prof. Jean Martin",
    role: "Enseignant-Chercheur",
    company: "Université de Paris",
  },
]

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              Témoignages
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Ce que disent les personnes avec qui j'ai eu la chance de travailler.
          </p>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
                
                <blockquote className="text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder for future testimonials */}
          <div className="mt-8 p-6 border-2 border-dashed border-border rounded-2xl text-center">
            <p className="text-muted-foreground text-sm">
              Plus de témoignages à venir...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
