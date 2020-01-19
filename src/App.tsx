import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;
