import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import "./style.css";
import routes from "./router";

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <A href="/user">Users Page</A>
      <A href="/about">About Page</A>
      <A href="/contact">Contacts Page</A>
      {routeResult}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
