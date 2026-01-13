import { useRoute, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import fypBuddy1 from "@assets/generated_images/FYPBuddy home.png";
import fypBuddy2 from "@assets/generated_images/FYPBuddyAbout.png";
import fypBuddy3 from "@assets/generated_images/FYPBuddyContact.png";
import ideaNestTech1 from "@assets/generated_images/IdeaNestTech home.png";
import ideaNestTech2 from "@assets/generated_images/IdeaNestTechAbout.png";
import ideaNestTech3 from "@assets/generated_images/IdeaNestTechCourses.png";
import hsrSeeds1 from "@assets/generated_images/HSR_Seeds_ecommerce_homepage_d24a40ae.png";
import hsrSeeds2 from "@assets/generated_images/HSR_Seeds_product_page_086becbd.png";
import hsrSeeds3 from "@assets/generated_images/HSR_Seeds_checkout_interface_2878180a.png";
import portfolio1 from "@assets/generated_images/Portfoliohome.png";
import portfolio2 from "@assets/generated_images/portfolioAbout.png";
import portfolio3 from "@assets/generated_images/PortfolioProjects.png";

const projectsData: Record<string, any> = {
  "fyp-buddy": {
    title: "FYP Buddy",
    description:
      "A complete full-stack Web application designed to provide users with a platform to Manage the final year project. This MERN stack application demonstrates proficiency in MongoDB, Express.js, React, and Node.js.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    date: "Dec 2024 - Dec 2025",
    status: "Completed",
    role: "Full Stack Developer",
    images: [fypBuddy1, fypBuddy2, fypBuddy3],
    liveLink: "https://fyp-buddy.up.railway.app",
    features: [
      "Project proposal submission and management",
      "Supervisor assignment and communication",
      "Progress tracking and milestone management",
      "Document upload and version control",
      "Real-time notifications and updates",
      "Admin dashboard for project oversight",
    ],
    fullDescription:
      "FYP Buddy is a comprehensive final year project management platform built using the MERN stack. The application streamlines the entire FYP process, from proposal submission to final presentation. Students can manage their projects, communicate with supervisors, and track progress through various milestones. The platform includes role-based access control for students, supervisors, and administrators, ensuring secure and efficient project management throughout the academic year.",
  },
  "idea-nest-tech": {
    title: "Idea Nest Tech",
    description:
      "A complete full-stack Web application designed to provide users with a platform to Search, Apply, and Enroll in Digital Courses Offered. This MERN stack application offers a comprehensive learning management system.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    date: "Aug 2025 - Sep 2025",
    status: "Completed",
    role: "Full Stack Developer",
    images: [ideaNestTech1, ideaNestTech2, ideaNestTech3],
    liveLink: "https://ideanesttech.onrender.com",
    features: [
      "Course catalog with advanced search and filtering",
      "User registration and authentication",
      "Course enrollment and payment processing",
      "Progress tracking and certificates",
      "Instructor dashboard for course management",
      "Responsive design for all devices",
    ],
    fullDescription:
      "Idea Nest Tech is a modern learning management system built with the MERN stack. The platform connects learners with digital courses across various domains. Students can browse courses, enroll in programs, and track their learning progress. The system includes secure payment integration, certificate generation upon course completion, and an instructor portal for course creation and management. The responsive design ensures a seamless experience across all devices.",
  },
  "hsr-seeds": {
    title: "HSR Seeds",
    description:
      "An Ecommerce Website Built using HTML, CSS, JavaScript, and PHP. This complete ecommerce platform is designed to provide users with access to modern agricultural products including pesticides, seeds, fertilizers, and other farming necessities.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    date: "Feb 2024 - May 2024",
    status: "Completed",
    role: "Full Stack Developer",
    images: [hsrSeeds1, hsrSeeds2, hsrSeeds3],
    features: [
      "Product catalog with search and filtering",
      "Shopping cart and checkout system",
      "User account management",
      "Order tracking and history",
      "Admin panel for inventory management",
      "Secure payment integration",
    ],
    fullDescription:
      "HSR Seeds is a fully functional ecommerce website tailored for the agricultural industry. The platform enables farmers and agricultural businesses to purchase essential products online. Built with PHP and MySQL on the backend, the site features a complete shopping experience including product browsing, cart management, and order processing. The admin panel allows for efficient inventory and order management.",
  },
  "portfolio": {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website built with React and TypeScript to showcase my projects, skills, and professional experience. This single-page application demonstrates proficiency in modern web development technologies.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Wouter"],
    date: "Nov 2024 - Present",
    status: "Completed",
    role: "Frontend Developer",
    images: [portfolio1, portfolio2, portfolio3],
    liveLink: "https://m-rafay-naeem-portfolio.vercel.app",
    features: [
      "Responsive design for all screen sizes",
      "Smooth scrolling and animations",
      "Project showcase with detailed views",
      "Skills and experience sections",
      "Contact form integration",
      "Fast performance with Vite",
    ],
    fullDescription:
      "This portfolio website is a modern, responsive single-page application built with React and TypeScript. It showcases my professional work, technical skills, and project experience in an elegant and user-friendly interface. The site uses Tailwind CSS for styling, providing a clean and consistent design system. Built with Vite for optimal performance, the portfolio features smooth animations, intuitive navigation, and detailed project pages. The responsive design ensures a seamless experience across all devices, from mobile phones to desktop computers.",
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id || "";
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 hover-elevate active-elevate-2"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="mb-8">
          <div className="relative aspect-[21/9] rounded-lg overflow-hidden bg-muted mb-6">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl font-bold"
              data-testid="text-project-title"
            >
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-gray-200 dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold">Timeline</span>
            </div>
            <p className="text-muted-foreground" data-testid="text-date">
              {project.date}
            </p>
          </Card>

          <Card className="p-6 bg-gray-200 dark:bg-gray-800">
            <div className="mb-2 font-semibold">Status</div>
            <Badge variant="secondary" data-testid="badge-status">
              {project.status}
            </Badge>
          </Card>

          <Card className="p-6 bg-gray-200 dark:bg-gray-800">
            <div className="mb-2 font-semibold">Role</div>
            <p className="text-muted-foreground" data-testid="text-role">
              {project.role}
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 bg-gray-200 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </Card>

            <Card className="p-8 bg-gray-200 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid gap-6">
                {project.images.slice(1).length === 2 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image: string, index: number) => (
                      <div
                        key={index + 1}
                        className="aspect-video rounded-lg overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all"
                        data-testid={`image-gallery-${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  project.images.slice(1).map((image: string, index: number) => (
                    <div
                      key={index + 1}
                      className="aspect-video rounded-lg overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all"
                      data-testid={`image-gallery-${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 2}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-tech-${index}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full justify-between hover-elevate active-elevate-2"
                      data-testid="button-demo"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  className="w-full justify-between hover-elevate active-elevate-2"
                  data-testid="button-github"
                >
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
