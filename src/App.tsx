import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
