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
  Box,
  Building2,
  FlaskConical,
  Package,
  Shield,
  Sofa,
} from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    title: "Turnkey Projects",
    description:
      "Complete laboratory setup from design and civil works to equipment installation and regulatory compliance handover.",
    icon: Building2,
    path: "/products/turnkey-projects",
    image: "/assets/generated/products-turnkey-projects.dim_800x500.jpg",
    badge: "Turnkey",
    ocid: "products.turnkey.card",
    linkOcid: "products.turnkey.link",
  },
  {
    title: "Laboratory Furniture",
    description:
      "SS 304/316 and chemical-resistant modular lab furniture including workbenches, cabinets, and fume hood setups.",
    icon: Sofa,
    path: "/products/laboratory-furniture",
    image: "/assets/generated/products-lab-furniture.dim_800x500.jpg",
    badge: "Furniture",
    ocid: "products.furniture.card",
    linkOcid: "products.furniture.link",
  },
  {
    title: "Clean Room Projects",
    description:
      "ISO 5 to ISO 8 cleanroom design and construction with HVAC, HEPA filtration, and full validation support.",
    icon: FlaskConical,
    path: "/products/cleanroom-projects",
    image: "/assets/generated/products-cleanroom-projects.dim_800x500.jpg",
    badge: "Cleanroom",
    ocid: "products.cleanroom.card",
    linkOcid: "products.cleanroom.link",
  },
  {
    title: "Safety & Storage Cabinets",
    description:
      "FM/CE-certified flammable, corrosive, and cryogenic storage cabinets for safe and compliant chemical storage.",
    icon: Shield,
    path: "/products/safety-storage-cabinets",
    image: "/assets/generated/products-safety-storage-cabinets.dim_800x500.jpg",
    badge: "Safety",
    ocid: "products.safety.card",
    linkOcid: "products.safety.link",
  },
  {
    title: "Other Lab Equipment & Accessories",
    description:
      "Comprehensive range of analytical instruments, centrifuges, microscopes, glassware, and lab consumables.",
    icon: Box,
    path: "/products/lab-equipment-accessories",
    image: "/assets/generated/products-lab-accessories.dim_800x500.jpg",
    badge: "Equipment",
    ocid: "products.equipment.card",
    linkOcid: "products.equipment.link",
  },
  {
    title: "Supply & Services",
    description:
      "End-to-end procurement, logistics, spare parts supply, AMC contracts, and technical helpdesk support.",
    icon: Package,
    path: "/products/supply-and-services",
    image: "/assets/generated/products-supply-services.dim_800x500.jpg",
    badge: "Supply",
    ocid: "products.supply.card",
    linkOcid: "products.supply.link",
  },
];

export default function Products() {
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
              Our Products
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Quality-assured laboratory products and solutions sourced from
              leading manufacturers, installed and supported by our certified
              engineers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.path}
                  data-ocid={product.ocid}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="group overflow-hidden transition-shadow hover:shadow-xl h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                          {product.badge}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 justify-between gap-4">
                      <CardDescription className="text-base leading-relaxed">
                        {product.description}
                      </CardDescription>
                      <Button
                        asChild
                        variant="outline"
                        className="w-fit"
                        data-ocid={product.linkOcid}
                      >
                        <Link to={product.path}>
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
              Looking for a Specific Product?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We source and supply specialized equipment on request. Contact our
              team to discuss your exact product requirements.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="text-base"
                data-ocid="products.contact.primary_button"
              >
                <Link to="/contact">
                  Request a Quote
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
