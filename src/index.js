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
      <br/>
      <A href="/about">About Page</A>
      <br/>
      <A href="/contact">Contacts Page</A>
      <br/>
      <A href="/o-mnie">O mnie</A>
      {routeResult}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
