import SubPageTemplate from "@/components/SubPageTemplate";

export default function ClinicalLabsPage() {
  return (
    <SubPageTemplate
      title="Clinical Laboratories"
      subtitle="Reliable diagnostic environments built for accuracy and speed"
      description="Clinical labs require precision, reliability, and hygiene. We provide complete lab setup solutions for hospitals, diagnostic centers, and pathology labs — from layout planning and equipment supply to installation and commissioning."
      features={[
        "Diagnostic equipment supply & setup",
        "Pathology and microbiology lab design",
        "Cold storage and refrigeration systems",
        "Specimen handling infrastructure",
        "Compliance with NABL/ISO standards",
        "Workflow-optimized layouts",
      ]}
      image="/assets/generated/clinical-labs.dim_800x500.jpg"
      imageAlt="Clinical Laboratory"
      category="Industries"
      imageLeft
    />
  );
}
