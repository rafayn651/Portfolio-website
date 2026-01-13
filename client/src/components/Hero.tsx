import { ArrowDown, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiGithub, SiLinkedin } from "react-icons/si";
import resumePDF from "@/assets/MY CV.pdf";

export default function Hero() {
  // Hero section with background image
  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <Badge
          variant="secondary"
          className="mb-6 text-sm px-4 py-2"
          data-testid="badge-status"
        >
          Available for Work
        </Badge>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          data-testid="text-hero-name"
        >
          <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent animate-pulse">
            M-Rafay Naeem
          </span>
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-4"
          data-testid="text-hero-title"
        >
          Software Engineering Student
        </p>

        <p
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          data-testid="text-hero-description"
        >
          Building practical solutions with a strong problem-solving mindset.
          Specializing in full-stack development, web applications, and data engineering.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={handleScrollToProjects}
            className="px-8 hover-elevate active-elevate-2"
            data-testid="button-view-projects"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToContact}
            className="px-8 bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
            data-testid="button-contact-me"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="px-8 hover-elevate active-elevate-2"
            data-testid="button-download-resume"
          >
            <a href={resumePDF} download="M-Rafay_Naeem_Resume.pdf">
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com/rafayn651"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background/50 backdrop-blur-sm rounded-full hover-elevate active-elevate-2 transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="GitHub"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/m-rafay-naeem-4a38a73a5?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background/50 backdrop-blur-sm rounded-full hover-elevate active-elevate-2 transition-all hover:bg-primary hover:text-primary-foreground"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
        </div>

        <button
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-full"
          data-testid="button-scroll-down"
        >
          <span className="text-sm tracking-wide">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
