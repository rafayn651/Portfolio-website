import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import fypBuddyImage from "@assets/generated_images/FYPBuddy home.png";
import ideaNestTechImage from "@assets/generated_images/IdeaNestTech home.png";
import hsrSeedsImage from "@assets/generated_images/HSR_Seeds_ecommerce_homepage_d24a40ae.png";
import portfolioImage from "@assets/generated_images/Portfoliohome.png";
import comingSoonImage from "@assets/generated_images/coming soon.jpg";

const projects = [
  {
    id: "fyp-buddy",
    title: "FYP Buddy",
    description:
      "A complete full-stack Web application designed to provide users with a platform to Manage the final year project.",
    image: fypBuddyImage,
    tech: ["MongoDB", "Express", "React", "Node.js","Web RTC","Socket.io","Python"],
    date: "Sep 2024 - Dec 2024",
    status: "Completed",
    category: "Full Stack",
  },
  {
    id: "idea-nest-tech",
    title: "Idea Nest Tech",
    description:
      "A complete full-stack Web application designed to provide users with a platform to Search, Apply, and Enroll in Digital Courses Offered",
    image: ideaNestTechImage,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    date: "Aug 2024 - Sep 2024",
    status: "Completed",
    category: "Full Stack",
  },
  {
    id: "hsr-seeds",
    title: "HSR Seeds",
    description:
      "A complete ecommerce website designed to provide users with a platform to buy modern day pesticides, seeds, fertilizers and other agricultural necessities",
    image: hsrSeedsImage,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    date: "Feb 2024 - May 2024",
    status: "Completed",
    category: "Web Development",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website built with React and TypeScript to showcase my projects, skills, and professional experience",
    image: portfolioImage,
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    date: "Nov 2024 - Present",
    status: "In Progress",
    category: "Frontend",
  },
  {
    id: "coming-soon",
    title: "More Projects Coming Soon",
    description:
      "I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative implementations!",
    image: comingSoonImage,
    tech: [],
    date: "TBA",
    status: "Coming Soon",
    comingSoon: true,
    category: "All",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = Array.from(new Set(projects.filter(p => !p.comingSoon).map(p => p.category)));
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory || p.comingSoon);
  return (
    <section 
      id="projects" 
      className="py-20 md:py-32 bg-card/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and achievements
          </p>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 flex flex-col h-full bg-gray-200 dark:bg-gray-800 border-2 shadow-md hover:shadow-xl hover:border-primary/50"
              data-testid={`card-project-${project.id}`}
            >
              {/* Image Section with Border Frame */}
              <div className="p-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted rounded-lg border-2 border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  
                  {/* Status Badge - Top Right */}
                  <Badge
                    variant="secondary"
                    className="absolute top-3 right-3 text-xs backdrop-blur-md bg-background/80"
                    data-testid={`badge-status-${project.id}`}
                  >
                    {project.status}
                  </Badge>

                  {/* Date - Bottom Left on Image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white backdrop-blur-sm bg-black/40 px-2 py-1 rounded">
                    <Calendar className="h-3 w-3" />
                    <span data-testid={`text-date-${project.id}`}>{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Section - Compact & Organized */}
              <div className="p-4 flex flex-col flex-1 space-y-3">
                {/* Title */}
                <h3
                  className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1"
                  data-testid={`text-title-${project.id}`}
                >
                  {project.title}
                </h3>

                {/* Description - Compact */}
                <p
                  className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1"
                  data-testid={`text-description-${project.id}`}
                >
                  {project.description}
                </p>

                {/* Tech Stack - Compact */}
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-0.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                        data-testid={`badge-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action Button - Compact */}
                {!project.comingSoon ? (
                  <Link href={`/project/${project.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group/btn hover:bg-primary hover:text-primary-foreground mt-2"
                      data-testid={`button-view-details-${project.id}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full opacity-60 cursor-not-allowed mt-2"
                    disabled
                    data-testid={`button-coming-soon-${project.id}`}
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
