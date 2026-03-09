import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const subcategories = [
  {
    title: "Clean Room Design & Engineering",
    description:
      "ISO class-based clean room design including HVAC layouts, air change rates, pressure differentials, and particle count calculations.",
  },
  {
    title: "HVAC & Air Handling",
    description:
      "Supply and installation of AHUs, FCUs, ducting, HEPA terminal filters, and VAV systems for controlled environments.",
  },
  {
    title: "HEPA Filtration Systems",
    description:
      "Supply and certification of HEPA H13/H14 terminal filter units, ULPA filters, and filter integrity testing.",
  },
  {
    title: "Positive & Negative Pressure Zones",
    description:
      "Design and monitoring of pressure cascade systems for sterile manufacturing, oncology, and containment suites.",
  },
  {
    title: "BMS (Building Management Systems)",
    description:
      "Integration of temperature, humidity, differential pressure, particle count monitoring with alarm systems and data loggers.",
  },
  {
    title: "Clean Room Validation",
    description:
      "Operational qualification, performance qualification, smoke studies, air velocity and particle count testing per ISO 14644 standards.",
  },
];

export default function CleanRoomServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            data-ocid="cleanroom-services.back_link"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Clean Room Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Design, construction, and validation of ISO-certified clean rooms
              and controlled environments for pharmaceutical, biotech, and
              research facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">
                ISO-Certified Clean Room Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Clean rooms are mission-critical environments that demand
                precision engineering. Our experienced team delivers clean rooms
                that meet ISO 14644, GMP Annex 1, and FDA guidelines for
                pharmaceutical and biotech applications.
              </p>
              <p className="text-lg text-muted-foreground">
                From Class ISO 5 (Grade A/B) to ISO 8 (Grade D), we design,
                build, and validate the full range of controlled environments.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/cleanroom-services.dim_800x500.jpg"
                alt="Clean Room Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Clean Room Service Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subcategories.map((cat, i) => (
              <div
                key={cat.title}
                data-ocid={`cleanroom-services.item.${i + 1}`}
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
