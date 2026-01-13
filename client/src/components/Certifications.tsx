import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/Certificate.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verified: boolean;
  certificate?: string;
}

const certifications: Certification[] = [
  {
    title: "Full Stack Web Development Internship",
    issuer: "Idea Nest Tech",
    date: "Aug 2025 - Sep 2025",
    description: "Successfully completed internship focusing on MERN stack development, building real-world applications and working with professional development practices",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    verified: true,
    certificate: certificateImage,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-certifications-heading"
          >
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and skill development
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all bg-gray-200 dark:bg-gray-800"
              data-testid={`card-certification-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                {cert.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>{cert.issuer}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {cert.certificate && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-2"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={cert.certificate}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              )}
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
