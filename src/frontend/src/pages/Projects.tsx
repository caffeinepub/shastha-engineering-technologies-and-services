import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteContent } from "../content/siteContent";

export default function Projects() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore our portfolio of successful engineering projects and see
              how we've helped clients achieve their goals
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Proven Track Record
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our projects speak for themselves
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  500+
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  98%
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  25+
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start Your Project Today
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Ready to bring your engineering vision to life? Let's collaborate
              on your next successful project.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
