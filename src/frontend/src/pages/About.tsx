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

      {/* Company Overview */}
      <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Company Overview
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Shastha Engineering Technologies and Services has been at the
                forefront of engineering innovation for over two decades. Our
                journey began with a simple vision: to provide exceptional
                engineering solutions that make a real difference in our
                clients' operations.
              </p>
              <p>
                Today, we are proud to serve a diverse portfolio of clients
                across multiple industries, from manufacturing and processing to
                energy and infrastructure. Our team of highly skilled engineers
                and technicians brings together decades of combined experience,
                cutting-edge technical knowledge, and a passion for solving
                complex challenges.
              </p>
              <p>
                What sets us apart is our commitment to understanding each
                client's unique needs and delivering tailored solutions that not
                only meet but exceed expectations. We invest in the latest
                technologies and continuously update our skills to ensure we
                remain at the cutting edge of engineering practice.
              </p>
              <p>
                As we look to the future, we remain committed to our founding
                principles: excellence in execution, innovation in approach, and
                unwavering dedication to client success. We invite you to join
                us on this journey and experience the Shastha Engineering
                difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
