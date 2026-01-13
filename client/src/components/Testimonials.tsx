import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Umair Afzaal",
    role: "Project Manager",
    company: "Idea Nest Tech",
    image: "",
    content: "Rafay is a brilliant student with exceptional technical skills. We're always open to working with talented developers like him. His dedication and quality of work on our projects has been outstanding, and we look forward to collaborating on future opportunities.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-testimonials-heading"
          >
            Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all relative bg-gray-200 dark:bg-gray-800"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
