import Footer from './footer/footer'
import Header from './header/header'
import './App.css'

import { Suspense } from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

import routers from "../router/index";

// import About from './Layout/About/about';


// const LayoutCom = () => {
//   return (
//       <Suspense fallback={<>loading ...</>}>
//           <Router >
//               <Routes>
//                   {routers.map((item, index) => {
//                       return (
//                           <Route
//                               key={index}
//                               path={item.path}
//                               element={<item.component />}
//                           />
//                       );
//                   })}
//               </Routes>
//           </Router>
//       </Suspense>
//   );
// };

const LayoutCom = () => {
  console.log(routers);
  return (
    <Suspense fallback={<>loading ...</>}>
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path === "/" ? "" : item.path}
              element={<item.component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <Router> {/* 将 <Router> 组件添加到这里 */}
      <Header></Header>
      <main>
        <LayoutCom />
        {/* <About></About> */}
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;