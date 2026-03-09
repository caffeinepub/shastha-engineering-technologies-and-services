import SubPageTemplate from "@/components/SubPageTemplate";

export default function MechanicalEquipmentPage() {
  return (
    <SubPageTemplate
      title="Mechanical Equipment"
      subtitle="Industrial-grade mechanical solutions for laboratory and process environments"
      description="We supply and install a wide range of mechanical equipment tailored for laboratory and industrial use. Our products are sourced from reputed manufacturers and include pumps, valves, piping systems, and custom-fabricated assemblies."
      features={[
        "Pumps (centrifugal, diaphragm, peristaltic)",
        "Pressure vessels and reactors",
        "Piping systems (SS/PVC/HDPE)",
        "Vacuum systems and compressors",
        "Heat exchangers",
        "Custom fabrication and installation",
      ]}
      image="/assets/generated/mechanical-equipment.dim_800x500.jpg"
      imageAlt="Mechanical Equipment"
      category="Products"
    />
  );
}
