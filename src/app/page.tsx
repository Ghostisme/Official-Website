'use client';
import HomeScreen from '@/app/components/screen_home';
import LabelScreen from '@/app/components/screen_label';
import WhyChoiceScreen from '@/app/components/screen_why_choice';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/controller';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/virtual';
import SwiperCore from 'swiper';
import { Controller, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
SwiperCore.use([Pagination, Mousewheel]);
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
export default function Home() {
  const swiper = useSwiper();
  const [controlledSwiper, setControlledSwiper] = useState(null);
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
  const handleSlideChange = () => {
    console.log('change');
    console.log(controlledSwiper, 'controlledSwiper');
    // swiper && swiper.slideNext();
  };
  return (
    <div>
      <main>
        <Swiper
          pagination={{ clickable: true }}
          parallax
          modules={[Mousewheel, Pagination, Scrollbar, Controller]}
          scrollbar={{ draggable: true }}
          controller={{ control: controlledSwiper }}
          onSwiper={onSwiper}
          onSlideChange={handleSlideChange}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.key} className="w-screen h-screen">
              {/* {item.Component} */}
              <item.Component />
              {/* {item.key} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

// export default Home;
