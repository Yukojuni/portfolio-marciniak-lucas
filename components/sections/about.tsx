"use client"

import { Capsule } from "@/components/ui/capsule"

export function AboutSection() {
  return (
    <section id="a-propos" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              À propos
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Découvrez qui je suis et ce qui me passionne.
          </p>

          {/* About me content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden border-2 border-border">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <img 
                      src="/images/lucas.jpeg" 
                      alt="Lucas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-primary">Bonjour !</span> Je suis Lucas, étudiant en informatique 
                avec une spécialisation en intelligence artificielle et data science.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Passionné par la data pour innover et résoudre des problèmes complexes, je combine 
                mes compétences techniques en Python, SQL et Machine Learning avec une 
                approche orientée résultats. Mon objectif : créer des solutions data-driven 
                qui ont un impact réel.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Actuellement à la recherche d&apos;une <span className="font-medium text-foreground">alternance</span> pour 
                mettre mes compétences au service d&apos;une équipe ambitieuse et continuer 
                à apprendre aux côtés de professionnels expérimentés.
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                <Capsule>Python</Capsule>
                <Capsule>Machine Learning</Capsule>
                <Capsule>SQL</Capsule>
                <Capsule>Data Viz</Capsule>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
