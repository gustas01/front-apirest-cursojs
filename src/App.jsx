import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Index';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
