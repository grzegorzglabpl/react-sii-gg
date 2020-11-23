import React from "react";
import Pages from "./pages";

const {
  StronaGlowna,
  CennikNiestandardowy,
  FormularzKontaktowy,
  Logowanie,
  Newsletter,
  Rejestracja,
  JakToDziala
} = Pages;

const routes = {
  "/": () => <StronaGlowna />,
  "/cennik-niestandardowy": () => <CennikNiestandardowy />,
  "/formularz-kontaktowy": () => <FormularzKontaktowy />,
  "/logowanie": () => <Logowanie />,
  "/newsletter": () => <Newsletter />,
  "/jak-to-dziala": () => <JakToDziala />
};

export default routes;
