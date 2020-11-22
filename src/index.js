import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";
import routes from "./router";
import "antd/dist/antd.css";
import "./style.css";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <Layout className="App">
      <Header>
        <A href="/user">Users Page</A>
        <A href="/about">About Page</A>
        <A href="/contact">Contacts Page</A>
        <A href="/o-mnie">O mnie</A>
      </Header>
      <Content>{routeResult}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
