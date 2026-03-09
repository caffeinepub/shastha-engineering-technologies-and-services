const clients = [
  { name: "Sai Life Science", sector: "Pharmaceutical", initials: "SL" },
  { name: "Pi Health Science", sector: "Health Science", initials: "PH" },
  { name: "Naurties", sector: "Pharmaceutical", initials: "NA" },
  { name: "Sandoz", sector: "Pharmaceutical", initials: "SA" },
  { name: "Genisys", sector: "Biotechnology", initials: "GE" },
  { name: "Ashland", sector: "Specialty Chemicals", initials: "AS" },
  { name: "Vikasitha", sector: "Pharmaceutical", initials: "VI" },
  { name: "Vasudha Pharma", sector: "Pharmaceutical", initials: "VP" },
  { name: "Saphal Life Science", sector: "Life Science", initials: "SP" },
  { name: "Aurobindo Pharma", sector: "Pharmaceutical", initials: "AU" },
  { name: "Dr. Reddy's", sector: "Pharmaceutical", initials: "DR" },
];

const gradients = [
  "from-blue-500 to-blue-700",
  "from-green-500 to-emerald-700",
  "from-purple-500 to-violet-700",
  "from-orange-500 to-amber-700",
  "from-teal-500 to-cyan-700",
  "from-rose-500 to-pink-700",
  "from-indigo-500 to-indigo-700",
  "from-amber-500 to-yellow-700",
  "from-cyan-500 to-sky-700",
  "from-emerald-500 to-green-700",
  "from-fuchsia-500 to-pink-700",
];

const stats = [
  { label: "Clients", value: "11+" },
  { label: "Since", value: "2019" },
  { label: "Reach", value: "Pan India" },
];

export default function Clients() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Clients
            </h1>
            <p className="mt-4 text-xl font-medium text-primary">
              Trusted by Leading Organizations
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We are proud to serve leading pharmaceutical companies,
              biotechnology firms, and research organizations across India.
            </p>
          </div>

          {/* Stats Row */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {clients.map((client, index) => (
              <div
                key={client.name}
                data-ocid={`clients.item.${index + 1}`}
                className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary/30"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index % gradients.length]} text-2xl font-bold text-white shadow-md`}
                >
                  {client.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {client.sector}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Join Our Growing Client Family
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experience the Shastha Engineering difference — quality,
              reliability, and a team that truly cares about your success.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              data-ocid="clients.contact.button"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
