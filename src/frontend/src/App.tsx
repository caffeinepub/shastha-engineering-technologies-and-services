import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import SiteLayout from "./components/SiteLayout";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Services from "./pages/Services";

import ClinicalLabsPage from "./pages/industries/ClinicalLabsPage";
import EducationalLabsPage from "./pages/industries/EducationalLabsPage";
import PharmaLabsPage from "./pages/industries/PharmaLabsPage";
import RndLabsPage from "./pages/industries/RndLabsPage";

import CleanroomProjectsPage from "./pages/products/CleanroomProjectsPage";
import ElectricalEquipmentPage from "./pages/products/ElectricalEquipmentPage";
import LabEquipmentAccessoriesPage from "./pages/products/LabEquipmentAccessoriesPage";
import LabFurniturePage from "./pages/products/LabFurniturePage";
import LaboratoryFurniturePage from "./pages/products/LaboratoryFurniturePage";
import MechanicalEquipmentPage from "./pages/products/MechanicalEquipmentPage";
import ProductsTurnkeyProjectsPage from "./pages/products/ProductsTurnkeyProjectsPage";
import SafetyEquipmentPage from "./pages/products/SafetyEquipmentPage";
import SafetyStorageCabinetsPage from "./pages/products/SafetyStorageCabinetsPage";
import SupplyAndServicesPage from "./pages/products/SupplyAndServicesPage";

// New service pages
import AdvisoryServicesPage from "./pages/services/AdvisoryServicesPage";
import AnnualMaintenancePage from "./pages/services/AnnualMaintenancePage";
import CalibrationServicesPage from "./pages/services/CalibrationServicesPage";
import CleanRoomServicesPage from "./pages/services/CleanRoomServicesPage";
import InstallationCommissioningPage from "./pages/services/InstallationCommissioningPage";
import LabFurnitureServicesPage from "./pages/services/LabFurnitureServicesPage";
import PipelineFittingServicesPage from "./pages/services/PipelineFittingServicesPage";
import SupplyProductsServicesPage from "./pages/services/SupplyProductsServicesPage";
import TurnkeyProjectsPage from "./pages/services/TurnkeyProjectsPage";
import TurnkeyProjectsServicesPage from "./pages/services/TurnkeyProjectsServicesPage";

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: Industries,
});

const pharmaLabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/pharma-labs",
  component: PharmaLabsPage,
});

const clinicalLabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/clinical-labs",
  component: ClinicalLabsPage,
});

const rndLabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/r-and-d-labs",
  component: RndLabsPage,
});

const educationalLabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries/educational-labs",
  component: EducationalLabsPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const mechanicalEquipmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/mechanical-equipment",
  component: MechanicalEquipmentPage,
});

const electricalEquipmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/electrical-equipment",
  component: ElectricalEquipmentPage,
});

const labFurnitureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/lab-furniture",
  component: LabFurniturePage,
});

const safetyEquipmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/safety-equipment",
  component: SafetyEquipmentPage,
});

const productsTurnkeyProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/turnkey-projects",
  component: ProductsTurnkeyProjectsPage,
});

const laboratoryFurnitureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/laboratory-furniture",
  component: LaboratoryFurniturePage,
});

const cleanroomProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/cleanroom-projects",
  component: CleanroomProjectsPage,
});

const safetyStorageCabinetsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/safety-storage-cabinets",
  component: SafetyStorageCabinetsPage,
});

const labEquipmentAccessoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/lab-equipment-accessories",
  component: LabEquipmentAccessoriesPage,
});

const supplyAndServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products/supply-and-services",
  component: SupplyAndServicesPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const installationCommissioningRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/installation-commissioning",
  component: InstallationCommissioningPage,
});

const annualMaintenanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/annual-maintenance",
  component: AnnualMaintenancePage,
});

const calibrationServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/calibration-services",
  component: CalibrationServicesPage,
});

const turnkeyProjectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/turnkey-projects",
  component: TurnkeyProjectsPage,
});

// New service routes
const advisoryServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/advisory-services",
  component: AdvisoryServicesPage,
});

const turnkeyProjectsServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/turnkey-projects-services",
  component: TurnkeyProjectsServicesPage,
});

const pipelineFittingServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/pipeline-fitting",
  component: PipelineFittingServicesPage,
});

const labFurnitureServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/laboratory-furniture",
  component: LabFurnitureServicesPage,
});

const cleanRoomServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/clean-room",
  component: CleanRoomServicesPage,
});

const supplyProductsServicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/supply-products",
  component: SupplyProductsServicesPage,
});

const clientsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/clients",
  component: Clients,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  // Industries
  industriesRoute,
  pharmaLabsRoute,
  clinicalLabsRoute,
  rndLabsRoute,
  educationalLabsRoute,
  // Products
  productsRoute,
  mechanicalEquipmentRoute,
  electricalEquipmentRoute,
  labFurnitureRoute,
  safetyEquipmentRoute,
  productsTurnkeyProjectsRoute,
  laboratoryFurnitureRoute,
  cleanroomProjectsRoute,
  safetyStorageCabinetsRoute,
  labEquipmentAccessoriesRoute,
  supplyAndServicesRoute,
  // Services
  servicesRoute,
  installationCommissioningRoute,
  annualMaintenanceRoute,
  calibrationServicesRoute,
  turnkeyProjectsRoute,
  advisoryServicesRoute,
  turnkeyProjectsServicesRoute,
  pipelineFittingServicesRoute,
  labFurnitureServicesRoute,
  cleanRoomServicesRoute,
  supplyProductsServicesRoute,
  // Other
  clientsRoute,
  galleryRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
