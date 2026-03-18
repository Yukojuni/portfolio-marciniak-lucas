import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Github, Lightbulb, Target, Wrench, BookOpen } from "lucide-react"
import { getProjectById, getAllProjectIds, projects } from "@/lib/projects"
import { Capsule } from "@/components/ui/capsule"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }))
}

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex(p => p.id === id)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Retour aux projets
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Capsule variant="star" />
                <span className="text-sm text-muted-foreground">
                  Projet {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
              
              <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.context}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight size={18} />
                    Voir +
                  </Link>
                )}
              </div>
            </header>

            {/* Hero image */}
            <div className="aspect-video bg-muted rounded-2xl mb-12 overflow-hidden border border-border">
              <img
                src={project.visual} // Assure-toi que chaque projet a un champ `image` avec son URL
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Impact highlight */}
            <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-2xl mb-12">
              <div className="flex items-center gap-3 mb-2">
                <Target className="text-primary" size={24} />
                <span className="font-semibold text-primary">Impact</span>
              </div>
              <p className="text-lg">{project.impact}</p>
            </div>

            {/* Description */}
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">
                Description du projet
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </section>

            {/* Stack */}
            <section className="mb-12">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">
                Technologies utilisées
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <Capsule key={tech} className="text-base px-4 py-2">
                    {tech}
                  </Capsule>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <section className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-full">
                    <Wrench className="text-destructive" size={20} />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    Défis rencontrés
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-semibold shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Lightbulb className="text-primary" size={20} />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    Solutions apportées
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary font-semibold shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Learnings */}
            <section className="p-6 bg-secondary/50 border border-border rounded-2xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">
                  Ce que j'ai appris
                </h2>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary">*</span>
                    <span className="text-muted-foreground">{learning}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Navigation */}
            <nav className="flex items-center justify-between pt-8 border-t border-border">
              {prevProject ? (
                <Link
                  href={`/projets/${prevProject.id}`}
                  className="group flex flex-col items-start"
                >
                  <span className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Projet précédent
                  </span>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              
              {nextProject ? (
                <Link
                  href={`/projets/${nextProject.id}`}
                  className="group flex flex-col items-end"
                >
                  <span className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    Projet suivant
                    <ArrowLeft size={14} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
