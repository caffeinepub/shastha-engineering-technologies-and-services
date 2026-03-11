import SubPageTemplate from "@/components/SubPageTemplate";

export default function PharmaLabsPage() {
  return (
    <SubPageTemplate
      title="Pharmaceutical Laboratories"
      subtitle="Precision-engineered environments for drug discovery and manufacturing"
      description="We design, build, and equip pharmaceutical laboratories to meet the highest standards of GMP compliance, safety, and efficiency. Our solutions cover cleanroom setups, HVAC systems, water purification, and complete lab infrastructure."
      features={[
        "GMP-compliant lab design",
        "Cleanroom installation",
        "HVAC & air handling systems",
        "Water purification systems (RO/DM)",
        "Fume hoods and biosafety cabinets",
        "Regulatory compliance support",
      ]}
      image="/assets/generated/pharma-labs-new.dim_800x500.jpg"
      imageAlt="Pharmaceutical Laboratory"
      category="Industries"
    />
  );
}
