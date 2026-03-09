import SubPageTemplate from "@/components/SubPageTemplate";

export default function CalibrationServicesPage() {
  return (
    <SubPageTemplate
      title="Calibration Services"
      subtitle="NABL-traceable calibration ensuring measurement accuracy"
      description="Accurate measurements are critical in lab environments. Our calibration services ensure your instruments meet the required standards with traceable, documented calibration certificates. We calibrate a wide range of analytical and process instruments."
      features={[
        "Traceable calibration certificates",
        "On-site and in-house calibration",
        "Temperature and pressure calibration",
        "Flow, weight, and electrical calibration",
        "Calibration scheduling and management",
        "Compliance with ISO/IEC 17025 standards",
      ]}
      image="/assets/generated/calibration-services.dim_800x500.jpg"
      imageAlt="Calibration Services"
      category="Services"
    />
  );
}
