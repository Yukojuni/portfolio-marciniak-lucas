"use client"

import { useState, useEffect } from "react"
import { Capsule } from "@/components/ui/capsule"
import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { projects } from "@/lib/projects"

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    
    api.on("select", onSelect)
    onSelect()
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="projets" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              Projets
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Une sélection de projets démontrant mes compétences en data science, 
            machine learning et développement web.
          </p>

          {/* Projects carousel */}
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-6">
                {projects.map((project, index) => (
                  <CarouselItem 
                    key={project.id} 
                    className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/2"
                  >
                    <Link href={`/projets/${project.id}`} className="block h-full">
                      <article
                        className="group h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
                      >
                        {/* Project image */}
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <img
                              src={project.image} // Assure-toi que chaque projet a un champ `image` avec son URL
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-foreground/80 text-background text-xs font-medium rounded-full">
                              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                            </span>
                          </div>
                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {project.demo && (
                              <span
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  window.open(project.demo, '_blank')
                                }}
                                className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 cursor-pointer"
                                aria-label="Voir la démo"
                              >
                                <ArrowUpRight size={16} />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Project content */}
                        <div className="p-6">
                          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.context}
                          </p>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>

                          {/* Impact */}
                          <div className="flex items-start gap-2 mb-4 p-3 bg-primary/5 rounded-lg">
                            <span className="text-primary font-medium text-sm shrink-0">Impact :</span>
                            <span className="text-sm">{project.impact}</span>
                          </div>

                          {/* Stack */}
                          <div className="flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((tech) => (
                              <Capsule key={tech} className="text-xs">
                                {tech}
                              </Capsule>
                            ))}
                            {project.stack.length > 4 && (
                              <Capsule className="text-xs">
                                +{project.stack.length - 4}
                              </Capsule>
                            )}
                          </div>
                        </div>
                      </article>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Custom navigation buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious 
                  className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                />
                
                {/* Dots indicator */}
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        current === index 
                          ? 'bg-primary w-8' 
                          : 'bg-border hover:bg-primary/50'
                      }`}
                      aria-label={`Aller au projet ${index + 1}`}
                    />
                  ))}
                </div>

                <CarouselNext 
                  className="relative inset-0 translate-x-0 translate-y-0 h-12 w-12 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                />
              </div>
            </Carousel>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="https://github.com/YukoJuni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-foreground font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github size={20} />
              Voir tous mes projets sur GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
