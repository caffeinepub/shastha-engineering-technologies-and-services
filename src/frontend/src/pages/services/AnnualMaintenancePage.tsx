import SubPageTemplate from "@/components/SubPageTemplate";

export default function AnnualMaintenancePage() {
  return (
    <SubPageTemplate
      title="Annual Maintenance Contracts"
      subtitle="Keep your equipment running at peak performance year-round"
      description="Our Annual Maintenance Contracts (AMC) provide scheduled preventive maintenance, emergency breakdown support, and priority service for all laboratory and industrial equipment. Minimize downtime and extend the life of your assets."
      features={[
        "Scheduled preventive maintenance visits",
        "Priority breakdown response",
        "Genuine spare parts supply",
        "Equipment performance monitoring",
        "Maintenance history reports",
        "Customizable AMC packages",
      ]}
      image="/assets/generated/annual-maintenance.dim_800x500.jpg"
      imageAlt="Annual Maintenance"
      category="Services"
      imageLeft
    />
  );
}
