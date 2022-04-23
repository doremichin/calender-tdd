import React from 'react';

import Main from './pages/Main';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/_shared/header';

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
