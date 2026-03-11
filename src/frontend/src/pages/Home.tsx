import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";
import {
  Armchair,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Hammer,
  Lightbulb,
  MapPin,
  Microscope,
  Package,
  PipetteIcon,
  TrendingUp,
  Users,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { siteContent } from "../content/siteContent";

// ─── Data ──────────────────────────────────────────────────────────────────

const latestServices = [
  {
    icon: Lightbulb,
    emoji: "💡",
    title: "Advisory Services",
    desc: "Expert consultation and guidance for engineering projects",
    tag: "Regulatory-ready advice",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "border-amber-400/40",
    iconColor: "text-amber-500",
    href: "/services/advisory",
  },
  {
    icon: Hammer,
    emoji: "🏗️",
    title: "Turnkey Projects",
    desc: "End-to-end project execution from design to commissioning",
    tag: "End-to-end delivery",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "border-blue-400/40",
    iconColor: "text-blue-500",
    href: "/services/turnkey-projects",
  },
  {
    icon: PipetteIcon,
    emoji: "🔧",
    title: "Pipeline Fitting Services",
    desc: "Complete pipeline design, supply and installation",
    tag: "SS / MS / CPVC certified",
    color: "from-slate-500/20 to-slate-600/5",
    accent: "border-slate-400/40",
    iconColor: "text-slate-500",
    href: "/services/pipeline-fitting",
  },
  {
    icon: Armchair,
    emoji: "🪑",
    title: "Laboratory Furniture",
    desc: "Custom lab furniture design, supply and installation",
    tag: "Modular & ergonomic",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "border-emerald-400/40",
    iconColor: "text-emerald-500",
    href: "/services/lab-furniture",
  },
  {
    icon: Wind,
    emoji: "🧪",
    title: "Clean Room Services",
    desc: "Design and setup of certified clean room environments",
    tag: "ISO-certified processes",
    color: "from-cyan-500/20 to-cyan-600/5",
    accent: "border-cyan-400/40",
    iconColor: "text-cyan-500",
    href: "/services/clean-room",
  },
  {
    icon: Package,
    emoji: "📦",
    title: "Supply & Services",
    desc: "Supply of all lab products with after-sales support",
    tag: "Pan India delivery",
    color: "from-violet-500/20 to-violet-600/5",
    accent: "border-violet-400/40",
    iconColor: "text-violet-500",
    href: "/services/supply",
  },
];

const clientsData = [
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

const industriesData = [
  {
    icon: FlaskConical,
    emoji: "🧬",
    name: "Pharma Labs",
    desc: "GMP-compliant infrastructure for pharmaceutical manufacturing & QC",
    href: "/industries/pharma-labs",
    img: "/assets/generated/pharma-labs.dim_800x500.jpg",
    badge: "GMP Ready",
  },
  {
    icon: Microscope,
    emoji: "🔬",
    name: "Clinical Labs",
    desc: "Precision setups for clinical diagnostics and pathology workflows",
    href: "/industries/clinical-labs",
    img: "/assets/generated/clinical-labs.dim_800x500.jpg",
    badge: "NABL Aligned",
  },
  {
    icon: Building2,
    emoji: "⚗️",
    name: "R&D Labs",
    desc: "Flexible, scalable lab environments for research and innovation",
    href: "/industries/rnd-labs",
    img: "/assets/generated/rnd-labs.dim_800x500.jpg",
    badge: "Scalable Design",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    name: "Educational Labs",
    desc: "Safe, modern, student-ready laboratories for institutions",
    href: "/industries/educational-labs",
    img: "/assets/generated/educational-labs.dim_800x500.jpg",
    badge: "Safety First",
  },
];

const statsData = [
  { icon: CalendarDays, value: "Since 2019", label: "Established" },
  { icon: Users, value: "12+", label: "Happy Clients" },
  { icon: TrendingUp, value: "6", label: "Service Areas" },
  { icon: MapPin, value: "Pan India", label: "Reach" },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero Section ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        {/* Atmospheric glow */}
        <div className="absolute top-[-10%] right-[-5%] h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[10%] h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
        <div className="container relative py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              className="flex flex-col justify-center space-y-6"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Badge
                  variant="outline"
                  className="mb-4 inline-flex items-center gap-1.5 border-primary/30 text-primary"
                  data-ocid="home.hero.tab"
                >
                  <img
                    src="/assets/uploads/Preview-1.png"
                    alt="Shastha Logo"
                    className="h-4 w-4 object-contain"
                  />
                  Engineering Your Vision
                </Badge>
              </motion.div>
              <motion.div className="space-y-4" variants={fadeUp}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {siteContent.hero.subtitle}
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  {siteContent.hero.description}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                variants={fadeUp}
              >
                <Button asChild size="lg" className="text-base">
                  <Link to="/contact" data-ocid="home.contact.primary_button">
                    {siteContent.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base"
                >
                  <Link
                    to="/services"
                    data-ocid="home.services.secondary_button"
                  >
                    Our Services
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                <img
                  src="/assets/generated/shastha-hero.dim_1920x800.png"
                  alt="Shastha Engineering lab infrastructure"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs">
                    ✓
                  </span>
                  ISO-Certified Processes
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────────── */}
      <motion.section
        className="border-b border-border bg-primary py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
      >
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-3 px-2"
              >
                <stat.icon className="h-5 w-5 shrink-0 text-primary-foreground/70" />
                <div className="text-center">
                  <div className="text-xl font-bold text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-primary-foreground/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                {index < statsData.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="hidden h-8 bg-primary-foreground/20 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Intro Section ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              {siteContent.intro.title}
            </motion.h2>
            <motion.p
              className="mt-6 text-lg text-muted-foreground"
              variants={fadeUp}
            >
              {siteContent.intro.description}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              variants={fadeUp}
            >
              {[
                "Mechanical Engineering",
                "Electrical Engineering",
                "Lab Infrastructure",
                "Clean Room Design",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-sm px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Section ────────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary"
              variants={fadeUp}
            >
              What We Do
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              Our Latest Services
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              variants={fadeUp}
            >
              Comprehensive engineering solutions tailored to your laboratory
              needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {latestServices.map((service, index) => (
              <motion.div key={service.title} variants={fadeUp}>
                <Link
                  to={service.href}
                  data-ocid={`home.services.item.${index + 1}`}
                  className="group block h-full"
                >
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-xl cursor-pointer border-transparent hover:${service.accent} bg-gradient-to-br ${service.color} hover:-translate-y-1`}
                  >
                    <CardHeader className="pb-3">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-sm border border-border/50 transition-transform duration-300 group-hover:scale-110">
                          <service.icon
                            className={`h-5 w-5 ${service.iconColor}`}
                          />
                        </div>
                        <ArrowRight
                          className={`h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 ${service.iconColor}`}
                        />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <CardDescription className="text-sm leading-relaxed">
                        {service.desc}
                      </CardDescription>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground/70">
                        <CheckCircle
                          className={`h-3 w-3 ${service.iconColor}`}
                        />
                        {service.tag}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Button asChild size="lg" variant="outline">
              <Link to="/services" data-ocid="home.services.view_all.button">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Industries We Serve ─────────────────────────────────────────── */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary"
              variants={fadeUp}
            >
              Industries
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              variants={fadeUp}
            >
              Specialized lab engineering for every scientific domain
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {industriesData.map((industry, index) => (
              <motion.div key={industry.name} variants={fadeUp}>
                <Link
                  to={industry.href}
                  data-ocid={`home.industries.item.${index + 1}`}
                  className="group block h-full"
                >
                  <Card className="h-full overflow-hidden border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={industry.img}
                        alt={industry.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs">
                        {industry.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-xl">{industry.emoji}</span>
                        <h3 className="font-bold text-foreground">
                          {industry.name}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {industry.desc}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Learn more
                        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Client Highlights ───────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/30 py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mb-12 flex flex-col items-center gap-4 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest text-primary"
              variants={fadeUp}
            >
              Clients
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              Trusted by Industry Leaders
            </motion.h2>
            {/* Prominent stat */}
            <motion.div
              className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-6 py-3"
              variants={fadeUp}
            >
              <span className="text-3xl font-extrabold text-primary">12+</span>
              <Separator orientation="vertical" className="h-8 bg-primary/20" />
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">
                  Happy Clients
                </div>
                <div className="text-xs text-muted-foreground">
                  Pan India • Since 2019
                </div>
              </div>
            </motion.div>
            <motion.p
              className="max-w-2xl text-base text-muted-foreground"
              variants={fadeUp}
            >
              Serving leading pharmaceutical companies, biotechnology firms, and
              research organisations across India
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {clientsData.map((client, index) => (
              <motion.div
                key={client.name}
                data-ocid={`home.clients.item.${index + 1}`}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
              >
                <div
                  className={`flex h-16 w-full items-center justify-center rounded-lg px-3 ${client.darkBg ? "bg-gray-900" : "bg-white"} border border-border/30`}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {client.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {client.sector}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/clients" data-ocid="home.clients.view_all.button">
                View All Clients
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────────────── */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary"
              variants={fadeUp}
            >
              Why Us
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              variants={fadeUp}
            >
              What sets us apart in the engineering industry
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {siteContent.highlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                className="space-y-3"
                variants={fadeUp}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        {/* Background texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="container relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl"
              variants={fadeUp}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="mt-6 text-lg text-primary-foreground/80"
              variants={fadeUp}
            >
              Let&apos;s discuss how we can help transform your engineering
              challenges into opportunities for success.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              variants={fadeUp}
            >
              <Button
                asChild
                size="lg"
                className="text-base bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/contact" data-ocid="home.cta.primary_button">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/about" data-ocid="home.cta.about.secondary_button">
                  About Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
