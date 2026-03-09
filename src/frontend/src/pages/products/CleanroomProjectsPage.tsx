import SubPageTemplate from "@/components/SubPageTemplate";

export default function CleanroomProjectsPage() {
  return (
    <SubPageTemplate
      title="Clean Room Projects"
      subtitle="Precision-controlled environments for pharmaceutical and biotech industries"
      description="We design and build cleanrooms to ISO 5 to ISO 8 classifications (Class 100 to Class 100,000) for pharmaceutical, biotech, semiconductor, and food industries. Our turnkey cleanroom solutions include civil construction, HVAC, HEPA filtration, differential pressure monitoring, and full validation."
      features={[
        "ISO 5 to ISO 8 cleanroom design and construction",
        "HVAC with HEPA/ULPA filtration systems",
        "Airlock and gowning room construction",
        "Differential pressure and environmental monitoring",
        "Cleanroom validation (IQ/OQ/PQ)",
        "GMP-compliant materials and finishes",
      ]}
      image="/assets/generated/products-cleanroom-projects.dim_800x500.jpg"
      imageAlt="Clean Room Project"
      category="Products"
      imageLeft={false}
    />
  );
}
