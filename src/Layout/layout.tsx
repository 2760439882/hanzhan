import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import routers from "../../router/index";
// import Slider from './Slider/slider-area'


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

  function Layout() {
    return (
      <>
      {/* <Slider></Slider> */}
      
      <LayoutCom></LayoutCom>
      </>
        
    );
  }

  export default Layout