// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';

import './My-Swiper.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';

export default () => {
    return (
        <div className='slide-box'>
            <Swiper
                // install Swiper modules
                modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                // slidesPerView={3}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='slide-item'>
                    <div className='item1'>
                        <div className='item-container'>
                            <h2>捍战赛事竞技</h2>
                            <p>多姿多彩、丰富的游戏体验</p>
                            <a href="https://jq.qq.com/?_wv=1027&amp;k=5idh1TA">捍战官方群</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <div className='item1'></div>
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <div className='item1'></div>
                </SwiperSlide>
                <SwiperSlide className='slide-item'>
                    <div className='item1'></div>
                </SwiperSlide>
            </Swiper>


            {/* <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper> */}
        </div>
    );
};