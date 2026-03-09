import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { siteContent } from "../content/siteContent";

export default function Contact() {
  const { contact } = siteContent;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-background via-background to-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Get in touch with our team. We're here to answer your questions
              and discuss your engineering needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Get In Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We'd love to hear from you. Send us a message and we'll
                  respond as soon as possible.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {contact.address}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-ocid="contact.phone_link"
                    >
                      {contact.phone}
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                      data-ocid="contact.email_link"
                    >
                      {contact.email}
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">WhatsApp</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
                      data-ocid="contact.whatsapp_button"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border border-border overflow-hidden h-48 bg-muted/40 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground font-medium">
                    Kukatpally, Hyderabad, Telangana
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kukatpally,Hyderabad,Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                    data-ocid="contact.map_link"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
