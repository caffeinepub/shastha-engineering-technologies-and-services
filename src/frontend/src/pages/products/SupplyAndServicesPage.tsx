import SubPageTemplate from "@/components/SubPageTemplate";

export default function SupplyAndServicesPage() {
  return (
    <SubPageTemplate
      title="Supply & Services"
      subtitle="Reliable procurement and support services for all your lab needs"
      description="We provide end-to-end supply chain and after-sales service support for laboratories across India. From sourcing and procurement to delivery, installation, and ongoing maintenance — our dedicated team ensures your lab operates without interruption."
      features={[
        "Procurement from certified domestic and international vendors",
        "Fast delivery with logistics support",
        "Spare parts supply for all major brands",
        "Installation and commissioning support",
        "Annual Maintenance Contracts (AMC)",
        "Technical helpdesk and remote support",
      ]}
      image="/assets/generated/products-supply-services.dim_800x500.jpg"
      imageAlt="Supply & Services"
      category="Products"
      imageLeft={true}
    />
  );
}
