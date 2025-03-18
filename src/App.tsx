import Router from '@/routers/index';
import { BrowserRouter } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
