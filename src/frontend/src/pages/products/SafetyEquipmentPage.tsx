import SubPageTemplate from "@/components/SubPageTemplate";

export default function SafetyEquipmentPage() {
  return (
    <SubPageTemplate
      title="Safety Equipment"
      subtitle="Protecting people and property in every laboratory environment"
      description="Safety is non-negotiable. We supply and install comprehensive lab safety equipment including emergency showers, eyewash stations, fire suppression systems, and spill containment products — ensuring full compliance with safety standards."
      features={[
        "Emergency eyewash and shower units",
        "Fire extinguisher and suppression systems",
        "Safety cabinets for flammables and corrosives",
        "Spill containment kits and trays",
        "PPE storage and dispensing units",
        "Safety signage and labeling systems",
      ]}
      image="/assets/generated/safety-equipment.dim_800x500.jpg"
      imageAlt="Safety Equipment"
      category="Products"
      imageLeft
    />
  );
}
