import SubPageTemplate from "@/components/SubPageTemplate";

export default function LaboratoryFurniturePage() {
  return (
    <SubPageTemplate
      title="Laboratory Furniture"
      subtitle="Durable, ergonomic lab furniture engineered for every environment"
      description="Our laboratory furniture is crafted using SS 304/316, phenolic resin, and chemical-resistant materials built to last in demanding lab conditions. We offer customized modular furniture systems including workbenches, cabinets, island benches, and specialist fume hood setups."
      features={[
        "Wall-mounted and island workbenches (SS/epoxy resin top)",
        "Overhead and base storage cabinets",
        "Fume hoods and laminar flow benches",
        "Chemical-resistant acid/base storage units",
        "Computer and instrument workstations",
        "Custom modular furniture packages",
      ]}
      image="/assets/generated/products-lab-furniture.dim_800x500.jpg"
      imageAlt="Laboratory Furniture"
      category="Products"
      imageLeft={true}
    />
  );
}
