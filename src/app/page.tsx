'use client';
import Brand from '@/app/components/screen_brand';
import Footer from '@/app/components/screen_footer';
import HomeScreen from '@/app/components/screen_home';
import LabelScreen from '@/app/components/screen_label';
import SuccessStories from '@/app/components/screen_success_stories';
import ScreenSwiper from '@/app/components/screen_swiper';
import WhyChoiceScreen from '@/app/components/screen_why_choice';
import { useEffect, useState } from 'react';

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
      <section className="product common-box">
        <SuccessStories />
      </section>
      <section>
        <Footer />
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
