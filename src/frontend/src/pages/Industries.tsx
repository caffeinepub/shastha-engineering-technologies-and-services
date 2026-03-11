import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Microscope,
  TestTube,
} from "lucide-react";
import { motion } from "motion/react";

const industries = [
  {
    title: "Pharmaceutical Laboratories",
    description:
      "GMP-compliant lab design, cleanroom installation, HVAC systems, water purification, and complete pharma lab infrastructure.",
    icon: FlaskConical,
    path: "/industries/pharma-labs",
    image: "/assets/generated/pharma-labs-new.dim_800x500.jpg",
    badge: "Pharma Labs",
    ocid: "industries.pharma.card",
    linkOcid: "industries.pharma.link",
  },
  {
    title: "Clinical Laboratories",
    description:
      "Complete diagnostic lab solutions for hospitals, pathology centers, and clinical facilities — NABL/ISO compliant.",
    icon: Microscope,
    path: "/industries/clinical-labs",
    image: "/assets/generated/clinical-labs.dim_800x500.jpg",
    badge: "Clinical Labs",
    ocid: "industries.clinical.card",
    linkOcid: "industries.clinical.link",
  },
  {
    title: "R&D Laboratories",
    description:
      "Flexible modular R&D lab design with high-precision instruments, vibration-free benches, and environmental controls.",
    icon: TestTube,
    path: "/industries/r-and-d-labs",
    image: "/assets/generated/rnd-labs.dim_800x500.jpg",
    badge: "R&D Labs",
    ocid: "industries.rnd.card",
    linkOcid: "industries.rnd.link",
  },
  {
    title: "Educational Laboratories",
    description:
      "Turnkey science lab setup for schools, colleges, and universities with student-safe furniture and safety systems.",
    icon: BookOpen,
    path: "/industries/educational-labs",
    image: "/assets/generated/educational-labs.dim_800x500.jpg",
    badge: "Educational Labs",
    ocid: "industries.educational.card",
    linkOcid: "industries.educational.link",
  },
];

export default function Industries() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-muted/40 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Specialized engineering solutions tailored for the most demanding
              laboratory and scientific environments across multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.path}
                  data-ocid={industry.ocid}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="group overflow-hidden transition-shadow hover:shadow-xl h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {industry.badge}
                        </span>
                      </div>
                      <CardTitle className="text-xl">
                        {industry.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 justify-between gap-4">
                      <CardDescription className="text-base leading-relaxed">
                        {industry.description}
                      </CardDescription>
                      <Button
                        asChild
                        variant="outline"
                        className="w-fit"
                        data-ocid={industry.linkOcid}
                      >
                        <Link to={industry.path}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Industry, Our Expertise
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Not sure which solution fits your lab? Our engineers will assess
              your needs and recommend the ideal setup.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="text-base"
                data-ocid="industries.contact.primary_button"
              >
                <Link to="/contact">
                  Talk to an Engineer
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
