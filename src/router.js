import React from "react";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import About from "./pages/About";

const routes = {
  "/": () => <Users />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/user": () => <Users />
};

export default routes;
