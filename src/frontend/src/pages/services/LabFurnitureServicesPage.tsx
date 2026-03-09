import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "Lab Bench Design & Fabrication",
    description:
      "Custom SS, MS powder-coated and phenolic resin lab benches designed for your workflow — island, wall-mounted, or peninsula configurations.",
  },
  {
    title: "Fume Hood Installation",
    description:
      "Supply and installation of ducted and ductless fume hoods, laminar flow cabinets, and biosafety cabinets for chemical and biological labs.",
  },
  {
    title: "Storage Solutions",
    description:
      "Acid, solvent and corrosive storage cabinets; safety cabinets; reagent shelving; under-bench storage units with GMP-compliant design.",
  },
  {
    title: "Mobile & Modular Furniture",
    description:
      "Flexible and modular lab furniture systems that can be reconfigured as your laboratory needs evolve.",
  },
  {
    title: "Anti-Static & ESD Furniture",
    description:
      "ESD-safe work surfaces, anti-static mats, and grounded workstations for electronics and sensitive instrument labs.",
  },
  {
    title: "Maintenance & Refurbishment",
    description:
      "Repair, refurbishment and AMC (Annual Maintenance Contract) for all types of existing lab furniture and fume hoods.",
  },
];

export default function LabFurnitureServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="lab-furniture-services.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Laboratory Furniture Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Custom design, fabrication, and installation of high-quality
              laboratory furniture — built for durability, compliance, and
              long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Purpose-Built Lab Furniture
              </h2>
              <p className="text-lg text-muted-foreground">
                Every laboratory is unique. Our furniture design team works with
                you to create workspaces that support your specific workflows,
                comply with safety standards, and stand up to years of heavy
                use.
              </p>
              <p className="text-lg text-muted-foreground">
                We use quality SS, MS powder-coat, phenolic resin, and
                polypropylene materials to ensure chemical resistance, strength,
                and easy decontamination.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/lab-furniture-services.dim_800x500.jpg"
                alt="Laboratory Furniture Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Furniture Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`lab-furniture-services.item.${i + 1}`}
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
