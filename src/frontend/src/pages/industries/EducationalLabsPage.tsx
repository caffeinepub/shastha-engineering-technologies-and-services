import SubPageTemplate from "@/components/SubPageTemplate";

export default function EducationalLabsPage() {
  return (
    <SubPageTemplate
      title="Educational Laboratories"
      subtitle="Inspiring the next generation with world-class learning facilities"
      description="We equip schools, colleges, and universities with safe, functional, and well-designed science labs. From chemistry and physics to biotechnology labs, our turnkey solutions ensure students learn in a safe and fully functional environment."
      features={[
        "Complete chemistry and physics lab setup",
        "Biology and microbiology lab equipment",
        "Student-safe furniture and fixtures",
        "Demonstration benches with utilities",
        "Safety systems and fire suppression",
        "Budget-friendly packages for institutions",
      ]}
      image="/assets/generated/educational-labs.dim_800x500.jpg"
      imageAlt="Educational Laboratory"
      category="Industries"
      imageLeft
    />
  );
}
