const clients = [
  {
    name: "Aditya Birla",
    sector: "Conglomerate",
    logo: "/assets/uploads/Aditya-Birla-Logo-Vector.svg--1.png",
    darkBg: false,
  },
  {
    name: "Ashland",
    sector: "Specialty Chemicals",
    logo: "/assets/uploads/250px-Ashland_4color_process-2.png",
    darkBg: false,
  },
  {
    name: "Enanti",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/1630634268079-3.jpeg",
    darkBg: false,
  },
  {
    name: "Sandoz",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/Sandoz-Logo-Sandoz-Blue-RGB-4.webp",
    darkBg: true,
  },
  {
    name: "Genisys Group",
    sector: "Biotechnology",
    logo: "/assets/uploads/images-5.png",
    darkBg: false,
  },
  {
    name: "Sai Life Sciences",
    sector: "Life Sciences",
    logo: "/assets/uploads/sai-6.jpeg",
    darkBg: false,
  },
  {
    name: "Virupaksha",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/V-LOGO-PNG-1536x543-1-7.png",
    darkBg: false,
  },
  {
    name: "Dr. Reddy's",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/Dr._Reddy-s_Laboratories_logo.svg-8.png",
    darkBg: false,
  },
  {
    name: "Novartis",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/Novartis-Logo-9.png",
    darkBg: true,
  },
  {
    name: "Aurobindo Pharma",
    sector: "Pharmaceutical",
    logo: "/assets/uploads/Aurobindo_Pharma_logo.svg-10.png",
    darkBg: false,
  },
  {
    name: "Coromandel",
    sector: "Agrochemicals",
    logo: "/assets/uploads/COROMANDEL.NS_BIG.D-fb684606-11.png",
    darkBg: false,
  },
  {
    name: "PI Health Sciences",
    sector: "Health Science",
    logo: "/assets/uploads/PI-12.webp",
    darkBg: false,
  },
];

const stats = [
  { label: "Clients", value: "12+" },
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
                className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary/30"
              >
                <div
                  className={`flex h-28 w-full items-center justify-center rounded-lg px-4 ${
                    client.darkBg ? "bg-gray-900" : "bg-white"
                  } border border-border/40`}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-20 w-full object-contain"
                  />
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
