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

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive engineering solutions designed to optimize your
              operations and drive success
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.services.map((service) => (
              <Card
                key={service.id}
                className="transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-3 text-5xl">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Icons Visual */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Engineering Excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our comprehensive approach to engineering services
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <img
                src="/assets/generated/shastha-service-icons.dim_512x512.png"
                alt="Service Icons"
                className="max-w-full rounded-lg border border-border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need a Custom Solution?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every project is unique. Let's discuss how we can tailor our
              services to meet your specific requirements.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Get in Touch
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
