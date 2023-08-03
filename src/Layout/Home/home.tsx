import React from "react";

import Winter2022 from "./theme/winter2022";
import Swiper from "../Slider/Swiper";
class Home extends React.Component {

    render() {
        return (
            <div>
                <Swiper></Swiper>
                <Winter2022></Winter2022>
            </div>
        )
    }
}

export default Home