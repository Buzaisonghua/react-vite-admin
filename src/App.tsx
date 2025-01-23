import Router from '@/routers/index';
import { HashRouter } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
