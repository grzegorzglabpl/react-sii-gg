import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import "antd/dist/antd.css";
import "./style.css";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <Layout className="App">
      <Header className="header">
        <A href="/login" className="link">Login</A>
        <A href="/rejestracja" className="link">Rejestracja</A>
        <A href="/jak-to-dziala" className="link">Jak to dziala</A>
      </Header>
      <Content className="content">{routeResult}</Content>
      <Footer className="footer">Footer</Footer>
    </Layout>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
