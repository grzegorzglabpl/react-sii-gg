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
        <A href="/user">Users Page</A>&nbsp;
        <A href="/about">About Page</A>&nbsp;
        <A href="/contact">Contacts Page</A>&nbsp;
        <A href="/o-mnie">O mnie</A>
      </Header>
      <Content className="content">{routeResult}</Content>
      <Footer className="footer">Footer</Footer>
    </Layout>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
