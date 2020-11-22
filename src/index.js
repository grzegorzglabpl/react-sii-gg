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
        <A href="/logowanie" className="link">
          Logowanie
        </A>
        <A href="/rejestracja" className="link">
          Rejestracja
        </A>
        <A href="/jak-to-dziala" className="link">
          Jak to dziala
        </A>
      </Header>
      <Content className="content">{routeResult}</Content>
      <Footer className="footer">
        <A href="/formularz-kontaktowy" className="link">
          Formularz Kontaktowy
        </A>
        <A href="/newsletter" className="link">
          Newsletter
        </A>
        <address className="adres">
          <div>Nazwa Firmy: Firma Freelancerska</div>
          <div>Adres Firmy: Firmowa 11, Warszawa</div>
          <div>Telefon kontaktowy: +48 112 112 112 </div>
        </address>
      </Footer>
    </Layout>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
