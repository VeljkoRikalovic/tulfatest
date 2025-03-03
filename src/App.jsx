import "./index.css";

import MainPage from "./components/Hero/Hero";
import Introducing from "./components/Introducing/Introducing";
import { lazy } from "react";

const Lorem = lazy(() => import("./components/Lorem/Lorem"));
const VirtualProductPhotography = lazy(() =>
  import("./components/VirtualProductPhotography/VirtualProductPhotography")
);
const ProductSilos = lazy(() =>
  import("./components/ProductSilos/ProductSilos")
);
const SizeVar = lazy(() => import("./components/SizeVar/SizeVar"));
const ColorVariation = lazy(() =>
  import("./components/ColorVariation/ColorVariation")
);
const LifestyleCTA = lazy(() =>
  import("./components/LifestyleCTA/LifestyleCTA")
);
const InstallationImages = lazy(() =>
  import("./components/InstallationImages/InstallationImages")
);
const DimensionImage = lazy(() =>
  import("./components/DimensionImage/DimensionImage")
);
const FlatLay = lazy(() => import("./components/FlatLay/FlatLay"));
const CloseUpShots = lazy(() =>
  import("./components/CloseUpShots/CloseUpShots")
);
const FabricVariation = lazy(() =>
  import("./components/FabricVariation/FabricVariation")
);

function App() {
  return (
    <>
      <MainPage />
      <Introducing />
      <VirtualProductPhotography />
      <Lorem />
      <ProductSilos />
      <SizeVar />
      <ColorVariation />
      <FabricVariation />
      <LifestyleCTA />
      <CloseUpShots />
      <InstallationImages />
      <DimensionImage />
      <FlatLay />
    </>
  );
}

export default App;
