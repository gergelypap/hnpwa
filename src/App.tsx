import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

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
