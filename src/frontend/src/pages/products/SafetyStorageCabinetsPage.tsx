import SubPageTemplate from "@/components/SubPageTemplate";

export default function SafetyStorageCabinetsPage() {
  return (
    <SubPageTemplate
      title="Safety & Storage Cabinets"
      subtitle="Certified storage solutions for hazardous and sensitive materials"
      description="Proper storage of chemicals and hazardous materials is essential for lab safety and compliance. We supply and install a wide range of certified safety and storage cabinets including flammable storage units, corrosive chemical cabinets, and general lab storage solutions."
      features={[
        "FM/CE-certified flammable material cabinets",
        "Acid and corrosive chemical storage cabinets",
        "Cryogenic and refrigerated storage units",
        "General lab storage and instrument cabinets",
        "Sliding, hinged, and roll-front door options",
        "Custom color-coded safety labeling",
      ]}
      image="/assets/generated/products-safety-storage-cabinets.dim_800x500.jpg"
      imageAlt="Safety & Storage Cabinets"
      category="Products"
      imageLeft={true}
    />
  );
}
