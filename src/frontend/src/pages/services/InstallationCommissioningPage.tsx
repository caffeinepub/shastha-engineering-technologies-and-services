import SubPageTemplate from "@/components/SubPageTemplate";

export default function InstallationCommissioningPage() {
  return (
    <SubPageTemplate
      title="Installation & Commissioning"
      subtitle="Seamless setup of your laboratory equipment by certified engineers"
      description="Our skilled engineers handle the complete installation and commissioning of all laboratory and industrial equipment. We ensure every system is properly installed, tested, and handed over with full documentation and operator training."
      features={[
        "Site survey and pre-installation planning",
        "Mechanical and electrical installation",
        "Instrument loop checking and testing",
        "Performance verification and validation",
        "Operator training and documentation",
        "Post-commissioning support",
      ]}
      image="/assets/generated/installation-commissioning.dim_800x500.jpg"
      imageAlt="Installation and Commissioning"
      category="Services"
    />
  );
}
