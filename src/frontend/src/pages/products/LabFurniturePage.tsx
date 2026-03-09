import SubPageTemplate from "@/components/SubPageTemplate";

export default function LabFurniturePage() {
  return (
    <SubPageTemplate
      title="Laboratory Furniture"
      subtitle="Ergonomic, durable furniture designed for every lab environment"
      description="Our laboratory furniture is manufactured using stainless steel, phenolic resin, and chemical-resistant materials to withstand harsh lab conditions. We offer complete furniture packages — from workbenches to storage cabinets and island benches."
      features={[
        "SS and epoxy resin lab benches",
        "Wall-mounted and island workbenches",
        "Overhead storage cabinets",
        "Fume hoods and laminar flow units",
        "Acid/base storage cabinets",
        "Custom modular designs",
      ]}
      image="/assets/generated/lab-furniture.dim_800x500.jpg"
      imageAlt="Laboratory Furniture"
      category="Products"
    />
  );
}
