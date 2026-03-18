"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#a-propos", label: "À propos", id: "a-propos" },
  { href: "#competences", label: "Compétences", id: "competences" },
  { href: "#projets", label: "Projets", id: "projets" },
  { href: "#parcours", label: "Parcours", id: "parcours" },
  { href: "#contact", label: "Contact", id: "contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = navItems.map(item => item.id)
      let currentSection = ""
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Section is considered active if it's in the top half of viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId
            break
          }
        }
      }
      
      // If we're at the top, no section is active
      if (window.scrollY < 100) {
        currentSection = ""
      }
      
      setActiveSection(currentSection)
    }
    
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
          Lucas<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
              {/* Active indicator bar */}
              <span 
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                  activeSection === item.id 
                    ? "opacity-100 scale-x-100" 
                    : "opacity-0 scale-x-0"
                )}
              />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Me contacter
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors py-2 flex items-center gap-2",
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                )}
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Me contacter
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
