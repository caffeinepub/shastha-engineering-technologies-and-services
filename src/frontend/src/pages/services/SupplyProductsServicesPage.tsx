import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "Laboratory Instruments & Analyzers",
    description:
      "Supply of analytical instruments including HPLC, GC, UV-Vis spectrophotometers, dissolution testers, Karl Fischer titrators and more.",
  },
  {
    title: "General Lab Equipment",
    description:
      "Centrifuges, autoclaves, incubators, water baths, hot plates, stirrers, balances, pH meters and general purpose lab equipment.",
  },
  {
    title: "Safety Equipment & PPE",
    description:
      "Safety showers, eye wash stations, fire extinguishers, fume hoods, spill kits, PPE and safety signage for lab environments.",
  },
  {
    title: "Lab Consumables & Chemicals",
    description:
      "Glassware, plasticware, filtration products, solvents, reagents, standards and other laboratory consumables.",
  },
  {
    title: "Calibration Standards & Reference Materials",
    description:
      "Certified reference materials, traceable calibration standards, and equipment calibration services.",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Comprehensive AMC packages for all lab equipment — regular preventive maintenance, emergency response, and spare parts support.",
  },
];

export default function SupplyProductsServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="supply-services.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Supply of All Products & Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              One-stop supply of laboratory instruments, equipment, consumables,
              safety products and accessories — backed by expert support and
              maintenance services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Your Complete Lab Supply Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                Managing multiple vendors for lab supplies is time-consuming and
                inefficient. Shastha Engineering offers a single-source supply
                solution, covering everything from high-precision analytical
                instruments to everyday consumables.
              </p>
              <p className="text-lg text-muted-foreground">
                We work with leading brands and manufacturers to ensure you
                receive genuine, certified products with full warranty and
                after-sales support.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/supply-services.dim_800x500.jpg"
                alt="Supply of Products and Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Supply & Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`supply-services.item.${i + 1}`}
                className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-lg text-foreground mb-3">
                  {cat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
