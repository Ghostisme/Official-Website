'use client';
import HomeScreen from '@/app/components/screen_home';
import LabelScreen from '@/app/components/screen_label';
import WhyChoiceScreen from '@/app/components/screen_why_choice';
import React, { useEffect, useState } from 'react';
import 'swiper/swiper.scss';
// import 'swiper/css/bundle';
// import 'swiper/css/virtual';
// import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const swiperList = [
  {
    id: 1,
    Component: HomeScreen,
    className: 'container',
    key: 'Slide 1'
  },
  {
    id: 2,
    Component: LabelScreen,
    className: 'container',
    key: 'Slide 2'
  },
  {
    id: 3,
    Component: WhyChoiceScreen,
    className: 'container',
    key: 'Slide 3'
  }
];
const Home: React.FC = () => {
  const [list, setList] = useState(
    [] as {
      id: number;
      className: string;
      key: string;
      Component: () => JSX.Element;
    }[]
  );
  useEffect(() => {
    setList(swiperList);
  });
  const onSwiper = (swiper) => {
    console.log(swiper, 'swiper');
  };
  const onSlideChange = () => {
    console.log('change');
  };
  return (
    <div>
      <main>
        <Swiper
          direction="vertical"
          initialSlide={1}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.key} virtualIndex={index}>
              {/* {item.Component} */}
              {item.key}
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
};

export default Home;
