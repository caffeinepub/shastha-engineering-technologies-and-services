import SubPageTemplate from "@/components/SubPageTemplate";

export default function ElectricalEquipmentPage() {
  return (
    <SubPageTemplate
      title="Electrical Equipment"
      subtitle="Safe, certified electrical systems for labs and industrial facilities"
      description="From power distribution to instrumentation, we supply and install complete electrical systems for laboratories and manufacturing facilities. Our offerings include control panels, UPS systems, instrumentation wiring, and energy management solutions."
      features={[
        "LT/HT switchgear and panels",
        "UPS and power conditioning",
        "Electrical control panels",
        "Instrumentation and SCADA wiring",
        "Earthing and lightning protection",
        "Energy audit and optimization",
      ]}
      image="/assets/generated/electrical-equipment.dim_800x500.jpg"
      imageAlt="Electrical Equipment"
      category="Products"
      imageLeft
    />
  );
}
