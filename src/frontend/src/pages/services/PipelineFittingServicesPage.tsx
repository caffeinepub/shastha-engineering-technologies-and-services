import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "SS (Stainless Steel) Piping",
    description:
      "Design, fabrication, and installation of SS 304 & SS 316 sanitary/utility pipelines for purified water, WFI, and process lines.",
  },
  {
    title: "MS (Mild Steel) Piping",
    description:
      "MS pipeline installation for utility services including compressed air, chilled water, steam, and other industrial utilities.",
  },
  {
    title: "CPVC / PVC Piping",
    description:
      "CPVC and PVC pipeline systems for chemical drain lines, acid/alkali transfer, and laboratory drainage networks.",
  },
  {
    title: "Laboratory Gas Supply Lines",
    description:
      "Centralized gas manifold system design and installation for nitrogen, oxygen, hydrogen, LPG, and other lab gases.",
  },
  {
    title: "Compressed Air Systems",
    description:
      "Compressed air generation, distribution, filtration, drying and point-of-use installation for lab and process equipment.",
  },
  {
    title: "Pressure Testing & Validation",
    description:
      "Hydrostatic and pneumatic pressure testing, leak testing and documentation for all installed pipeline systems.",
  },
];

export default function PipelineFittingServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="pipeline.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Pipeline Fitting Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Complete SS, MS and CPVC pipeline design, fabrication, and
              installation for laboratory gas, water, chemical, and utility
              systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Precision Pipeline Installation
              </h2>
              <p className="text-lg text-muted-foreground">
                A well-designed and installed pipeline system is the backbone of
                any laboratory. Our experienced team handles all types of lab
                utility piping with precision, ensuring leak-free, validated
                installations.
              </p>
              <p className="text-lg text-muted-foreground">
                We follow GMP-compliant practices for pharmaceutical facilities
                and maintain full documentation trail for all pipeline systems
                we install.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/pipeline-fitting-services.dim_800x500.jpg"
                alt="Pipeline Fitting Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Pipeline Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`pipeline.item.${i + 1}`}
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
