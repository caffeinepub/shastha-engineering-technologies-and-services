import SubPageTemplate from "@/components/SubPageTemplate";

export default function RndLabsPage() {
  return (
    <SubPageTemplate
      title="R&D Laboratories"
      subtitle="Innovative spaces engineered for cutting-edge research"
      description="Research and development demands flexibility and precision. Our R&D lab solutions are designed to support complex experimental workflows with high-performance equipment, adaptable infrastructure, and robust safety systems."
      features={[
        "Flexible modular lab design",
        "High-precision instrument installation",
        "Vibration-free workbench systems",
        "Specialized gas supply systems",
        "Environmental control systems",
        "Custom ventilation and exhaust setups",
      ]}
      image="/assets/generated/rnd-labs.dim_800x500.jpg"
      imageAlt="R&D Laboratory"
      category="Industries"
    />
  );
}
