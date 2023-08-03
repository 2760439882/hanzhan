import Footer from './footer/footer'
import Header from './header/header'
import Layout from './Layout/layout';

import './App.css'

// import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import routers from "../router/index";



function App() {
  return (
    <Router>
      <Header></Header>

      <Layout></Layout>

      <Footer></Footer>
    </Router>
  );
}

export default App;