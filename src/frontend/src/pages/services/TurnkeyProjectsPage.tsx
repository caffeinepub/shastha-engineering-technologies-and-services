import SubPageTemplate from "@/components/SubPageTemplate";

export default function TurnkeyProjectsPage() {
  return (
    <SubPageTemplate
      title="Turnkey Projects"
      subtitle="End-to-end lab setup — from concept to commissioning"
      description="We deliver complete turnkey laboratory projects, managing every aspect from initial design and layout planning to procurement, construction, installation, and final handover. Our turnkey approach ensures on-time, on-budget delivery with zero hassle."
      features={[
        "Lab layout and architectural design",
        "Civil and interior works",
        "Equipment procurement and supply",
        "Complete installation and commissioning",
        "Compliance and regulatory support",
        "Single-point responsibility and accountability",
      ]}
      image="/assets/generated/turnkey-projects.dim_800x500.jpg"
      imageAlt="Turnkey Projects"
      category="Services"
      imageLeft
    />
  );
}
