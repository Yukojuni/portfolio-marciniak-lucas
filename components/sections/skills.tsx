"use client"

import { Capsule } from "@/components/ui/capsule"

const skillCategories = [
  {
    title: "Data Science & Machine Learning",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Dataiku"
    ],
  },
  {
    title: "Data Analysis & Visualization",
    skills: [
      "Power BI",
      "Excel",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit"
    ],
  },
  {
    title: "Data Engineering & Automation",
    skills: [
      "SQL",
      "NoSQL",
      "Snowflake",
      "ETL Pipelines",
      "n8n"
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Git",
      "Docker",
      "AWS",
      "Azure",
      "Jupyter Notebook"
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="competences" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <Capsule variant="star" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold">
              Compétences
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Un ensemble de compétences techniques et méthodologiques pour transformer 
            les données en solutions concrètes.
          </p>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Capsule key={skill} className="text-xs">
                      {skill}
                    </Capsule>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
