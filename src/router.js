import React from "react";
import CennikNiestandardowy from "./pages/CennikNiestandardowy";
import FormularzKontaktowy from "./pages/FormularzKontaktowy";
import Logowanie from "./pages/Logowanie";
import Newsletter from "./pages/Newsletter";
import Rejestracja from "./pages/Rejestracja";
import StronaGlowna from "./pages/StronaGlowna";
import JakToDziala from "./pages/JakToDziala";

const routes = {
  "/": () => <StronaGlowna />,
  "/cennik-niestandardowy": () => <CennikNiestandardowy />,
  "/formularz-kontaktowy": () => <FormularzKontaktowy />,
  "/logowanie": () => <Logowanie />,
  "/newsletter": () => <Newsletter />,
  "/rejestracja": () => <Rejestracja />,
  "/jak-to-dziala": () => <JakToDziala />
};

export default routes;
