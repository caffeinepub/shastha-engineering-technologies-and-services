import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "End-to-End Lab Setup",
    description:
      "Complete laboratory setup from civil modifications, furniture, utilities, HVAC, electrical, instrumentation to final handover — one vendor, zero hassle.",
  },
  {
    title: "Project Planning & Scheduling",
    description:
      "Detailed project plans, Gantt charts, and milestone tracking to ensure timely and budget-controlled delivery.",
  },
  {
    title: "Civil & Interior Works",
    description:
      "Civil modifications, flooring (epoxy/vinyl/tiles), false ceiling, wall cladding, doors and windows as part of lab fitout.",
  },
  {
    title: "Electrical & Instrumentation",
    description:
      "Complete electrical panel design, cabling, earthing, lighting, power points, data cabling, and instrument loop checks.",
  },
  {
    title: "Utility Installation",
    description:
      "Installation of purified water lines, gas supply lines, compressed air, drainage, vacuum systems and other lab utilities.",
  },
  {
    title: "Commissioning & Handover",
    description:
      "Systematic commissioning, punch list clearance, documentation, training and smooth handover to the client's team.",
  },
];

export default function TurnkeyProjectsServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="turnkey-services.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Turnkey Project Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We deliver complete laboratory projects on a turnkey basis —
              design, supply, installation, commissioning and handover under one
              roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                Complete Lab Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                A turnkey contract means you hand over the responsibility to us
                and receive a fully functional laboratory. We manage every trade
                and coordinate every vendor so you don't have to.
              </p>
              <p className="text-lg text-muted-foreground">
                From pharma labs to clinical diagnostics centers, R&D facilities
                to educational institution labs — we have delivered hundreds of
                projects on time and on budget.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/turnkey-services.dim_800x500.jpg"
                alt="Turnkey Project Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Turnkey Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`turnkey-services.item.${i + 1}`}
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
