// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.tsx';
// import AppRouter from '../router/router.tsx';

// import Footer from './footer/footer';
// import Header from './header/header';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <AppRouter>
//       <App />
//     </AppRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


import Footer from './footer/footer.tsx'
import Header from './Layout/header/header.tsx'
import './index.css'


// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    // <React.StrictMode>
    // <BrowserRouter>
      <App></App>
    // </BrowserRouter>
    
  // </React.StrictMode>
  
)
