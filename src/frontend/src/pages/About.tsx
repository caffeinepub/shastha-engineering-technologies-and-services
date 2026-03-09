import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteContent } from "../content/siteContent";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Learn more about our company, mission, and the values that drive
              us forward
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Shastha Engineering Technologies and Services was founded in
                <strong> 2019</strong> with a clear vision: to provide
                comprehensive, high-quality engineering solutions for
                laboratories and research facilities across India.
              </p>
              <p className="text-lg text-muted-foreground">
                We specialize in complete mechanical and electrical engineering
                services for <strong>Pharma Labs</strong>,{" "}
                <strong>Clinical Labs</strong>, <strong>R&D Labs</strong>, and{" "}
                <strong>Educational Labs</strong>. From lab furniture to clean
                rooms, pipeline fitting to turnkey projects — we handle it all.
              </p>
              <p className="text-lg text-muted-foreground">
                Headquartered in Kukatpally, Hyderabad, we have successfully
                completed over 100 projects and continue to grow, driven by our
                commitment to client satisfaction and engineering excellence.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Shastha Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-10 lg:grid-cols-3 items-center">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-2xl border border-border shadow-xl w-60 h-72">
                  <img
                    src="/assets/generated/ceo-portrait.dim_400x500.jpg"
                    alt="V. Hemanth - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    V. Hemanth
                  </h2>
                  <p className="text-lg font-semibold text-primary mt-1">
                    Chief Executive Officer
                  </p>
                </div>
                <p className="text-lg text-muted-foreground">
                  With a strong foundation in mechanical and electrical
                  engineering, V. Hemanth founded Shastha Engineering
                  Technologies and Services in 2019. His vision of delivering
                  world-class lab infrastructure solutions to the pharmaceutical
                  and scientific community has shaped the company's growth and
                  culture.
                </p>
                <p className="text-lg text-muted-foreground">
                  Under his leadership, Shastha has become a trusted name in
                  laboratory engineering, known for quality execution,
                  professional service, and customer-first values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                {siteContent.about.mission}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                {siteContent.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.about.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.about.values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
