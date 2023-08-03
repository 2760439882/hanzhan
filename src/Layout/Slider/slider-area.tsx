import React from 'react';

import './slider.css'

class Slider extends React.Component {

    render(): React.ReactNode {
        return (
            // <!-- 创建外部展示容器 -->
            <div className="banner-container">
                {/* <!-- 创建图片存储容器 --> */}
                <div className="banner-box-container">
                    <div className='slider-item'>1</div>
                    <div className='slider-item'>2</div>
                    <div className='slider-item'>3</div>
                </div>
            </div>
        )
    }
}

export default Slider