import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

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
