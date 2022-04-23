import React, { Suspense } from 'react';

import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/_shared/header';
import Routers from './Routers';

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Suspense fallback="loading">
        <Routers />
      </Suspense>
    </>
  );
}

export default App;
