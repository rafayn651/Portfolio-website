import { Card } from "@/components/ui/card";

import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiJavascript, SiExpress, SiTailwindcss, SiGit, SiHtml5, SiCss3, SiPhp, SiPython } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    level: 85,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    level: 80,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    level: 75,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    level: 80,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    level: 90,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    level: 85,
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tools",
    level: 75,
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    category: "Frontend",
    level: 90,
  },
  {
    name: "CSS3",
    icon: SiCss3,
    category: "Frontend",
    level: 85,
  },
  {
    name: "PHP",
    icon: SiPhp,
    category: "Backend",
    level: 70,
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Language",
    level: 65,
  },
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-skills-heading"
          >
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all group bg-gray-200 dark:bg-gray-800"
              data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
