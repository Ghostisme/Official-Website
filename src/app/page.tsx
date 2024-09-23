'use client';
import Brand from '@/app/components/screen_brand';
import HomeScreen from '@/app/components/screen_home';
import LabelScreen from '@/app/components/screen_label';
import ScreenSwiper from '@/app/components/screen_swiper';
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
import { Mousewheel, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
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
    <main className="overflow-x-hidden">
      <section className="indicator scroll-indicator"></section>
      <section className="product common-box">
        <HomeScreen />
      </section>
      <section className="product common-box">
        <LabelScreen />
      </section>
      <section className="product common-box">
        <ScreenSwiper />
      </section>
      <section className="product common-box">
        <Brand />
      </section>
      <section className="product common-box">
        <WhyChoiceScreen />
      </section>
      {/* <section>
        <section className="product common-box">
          <HomeScreen />
        </section>
        <section className="product common-box">
          <LabelScreen />
        </section>
        <section className="product common-box">
          <ScreenSwiper />
        </section>
        <section className="product common-box">
          <Brand />
        </section>
        <section className="product common-box">
          <WhyChoiceScreen />
        </section>
      </section> */}
      {/* <Swiper
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
              <item.Component />
            </SwiperSlide>
          ))}
        </Swiper> */}
    </main>
  );
}

// export default Home;
