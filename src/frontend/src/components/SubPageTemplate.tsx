import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "motion/react";

interface SubPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  category: string;
  categoryColor?: string;
  imageLeft?: boolean;
}

export default function SubPageTemplate({
  title,
  subtitle,
  description,
  features,
  image,
  imageAlt,
  category,
  imageLeft = false,
}: SubPageTemplateProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-muted/40 py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container relative">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-1 text-xs font-semibold tracking-widest uppercase"
            >
              {category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              {title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div
            className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
              imageLeft ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: imageLeft ? 32 : -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ aspectRatio: "8/5" }}
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: imageLeft ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Offer
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase text-primary">
                  Key Features
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground leading-snug">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-14 md:py-20">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Phone className="mx-auto mb-4 h-10 w-10 text-primary opacity-70" />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Speak to our engineering specialists and get a tailored solution
              for your requirements.
            </p>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="text-base"
                data-ocid="subpage.contact.primary_button"
              >
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
