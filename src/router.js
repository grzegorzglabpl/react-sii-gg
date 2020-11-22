import React from "react";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Grzesiek from "./pages/Grzesiek";

const routes = {
  "/": () => <Users />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/user": () => <Users />,
  "/o-mnie": () => <Grzesiek />
};

export default routes;
