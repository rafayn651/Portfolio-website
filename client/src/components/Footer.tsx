import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "Certifications", href: "#certifications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-gray-100 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">M-Rafay Naeem</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Building practical solutions with a strong problem-solving mindset.
              Software Engineering student passionate about full-stack development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-sm text-gray-300 hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded"
                  data-testid={`link-footer-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Tech Stack</h3>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-700 rounded-lg hover-elevate active-elevate-2">
                <SiReact className="h-5 w-5 text-cyan-500" />
              </div>
              <div className="p-2 bg-gray-700 rounded-lg hover-elevate active-elevate-2">
                <SiTailwindcss className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="p-2 bg-gray-700 rounded-lg hover-elevate active-elevate-2">
                <SiTypescript className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Made with React, Tailwind & TypeScript
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p data-testid="text-copyright">
            © {currentYear} M-Rafay Naeem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
