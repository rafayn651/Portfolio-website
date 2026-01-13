import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const timelineEvents = [
  {
    year: "2022 - 2026",
    title: "Bachelor of Software Engineering",
    organization: "National University of Modern Languages (NUML)",
    description: "Pursuing Software Engineering with a focus on full-stack development, data engineering, and database management. Maintaining a CGPA of 3.64.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2024 - 2025",
    title: "FYP Buddy - Final Year Project",
    organization: "NUML University",
    description: "Led the development of a comprehensive project management platform for final year students, implementing MERN stack architecture.",
    icon: Briefcase,
    type: "project",
  },
  {
    year: "Aug 2025 - Sep 2025",
    title: "Full Stack Web Development Internship",
    organization: "Idea Nest Tech",
    description: "Completed internship focusing on MERN stack development, building real-world applications and working with professional development practices.",
    icon: Briefcase,
    type: "experience",
  },
  {
    year: "2019 - 2021",
    title: "Intermediate in Pre-Medical",
    organization: "Punjab Group Of Colleges, Bahawalnagar, Punjab",
    description: "Completed intermediate education with a focus on Pre-Medical, building strong foundations in sciences with 998 out of 1100 marks.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2016 - 2018",
    title: "Matriculation in General Science",
    organization: "District Public School , Bahawalnagar",
    description: "Completed matriculation with distinction in General Science. Achieved Grade A with 975 out of 1100 marks.",
    icon: GraduationCap,
    type: "education",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-timeline-heading"
          >
            My Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Education, experience, and milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`timeline-event-${index}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                  <Card className="p-6 hover-elevate active-elevate-2 transition-all bg-gray-200 dark:bg-gray-800">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <event.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-medium mb-1">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {event.organization}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
