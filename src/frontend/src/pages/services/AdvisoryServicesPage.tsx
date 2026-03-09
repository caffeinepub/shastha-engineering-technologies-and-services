import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "Lab Layout & Design Consulting",
    description:
      "We assess your space and provide professional layout planning to ensure compliance, workflow efficiency, and regulatory adherence for your lab facility.",
  },
  {
    title: "Regulatory & Compliance Advisory",
    description:
      "Guidance on GMP, GLP, ISO, NABL, and other regulatory requirements for laboratory environments. We help you prepare for audits and accreditations.",
  },
  {
    title: "Equipment Selection Advisory",
    description:
      "Unbiased technical advice on selecting the right laboratory instruments and equipment for your specific application, budget, and compliance needs.",
  },
  {
    title: "Project Feasibility Studies",
    description:
      "Detailed feasibility analysis covering technical, financial, and operational aspects before you commit to a major lab investment.",
  },
  {
    title: "Vendor & Procurement Support",
    description:
      "We help you identify reliable vendors, evaluate quotations, and manage procurement processes to ensure value for money.",
  },
  {
    title: "Validation & Qualification Support",
    description:
      "IQ, OQ, PQ support for lab equipment and utility systems, ensuring your instruments perform within validated parameters.",
  },
];

export default function AdvisoryServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="advisory.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Advisory Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Expert engineering consultancy and advisory to help you plan,
              design, and execute laboratory projects with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Advisory Services Matter
              </h2>
              <p className="text-lg text-muted-foreground">
                Starting a laboratory project without proper engineering
                guidance can result in costly rework, compliance failures, and
                delays. Our advisory services give you expert insight at every
                step — from initial concept through final handover.
              </p>
              <p className="text-lg text-muted-foreground">
                With deep experience in pharma, clinical, R&D and educational
                labs, our consultants understand the nuances of each environment
                and help you avoid common pitfalls.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/advisory-services.dim_800x500.jpg"
                alt="Advisory Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Advisory Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`advisory.service.item.${i + 1}`}
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
