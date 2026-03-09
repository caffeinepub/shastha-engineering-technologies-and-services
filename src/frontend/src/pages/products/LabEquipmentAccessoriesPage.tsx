import SubPageTemplate from "@/components/SubPageTemplate";

export default function LabEquipmentAccessoriesPage() {
  return (
    <SubPageTemplate
      title="Other Lab Equipment & Accessories"
      subtitle="A complete range of lab instruments, consumables, and accessories"
      description="Beyond major equipment, we supply a comprehensive range of laboratory instruments, consumables, and accessories. From precision balances and pH meters to glassware, pipettes, and lab consumables — we are your one-stop source for all lab needs."
      features={[
        "Analytical and precision instruments (balances, pH meters, spectrophotometers)",
        "Centrifuges, mixers, and incubators",
        "Microscopes and magnification systems",
        "Glassware, plasticware, and consumables",
        "Pipettes, dispensers, and liquid handling equipment",
        "Filtration and separation accessories",
      ]}
      image="/assets/generated/products-lab-accessories.dim_800x500.jpg"
      imageAlt="Lab Equipment & Accessories"
      category="Products"
      imageLeft={false}
    />
  );
}
