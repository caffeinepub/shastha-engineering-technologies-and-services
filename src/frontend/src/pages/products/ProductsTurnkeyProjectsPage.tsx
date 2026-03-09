import SubPageTemplate from "@/components/SubPageTemplate";

export default function ProductsTurnkeyProjectsPage() {
  return (
    <SubPageTemplate
      title="Turnkey Laboratory Projects"
      subtitle="Complete lab setup from design to handover — zero hassle"
      description="We deliver fully equipped, ready-to-use laboratory projects on a turnkey basis. From space planning and civil works to equipment procurement, installation, and commissioning — we handle everything. Our single-point accountability model ensures on-time delivery and quality compliance."
      features={[
        "Concept design and lab layout planning",
        "Civil, interior and MEP works",
        "Equipment procurement from certified vendors",
        "Complete installation and commissioning",
        "Regulatory compliance (GMP/ISO/NABL)",
        "Operator training and documentation handover",
      ]}
      image="/assets/generated/products-turnkey-projects.dim_800x500.jpg"
      imageAlt="Turnkey Laboratory Project"
      category="Products"
      imageLeft={false}
    />
  );
}
