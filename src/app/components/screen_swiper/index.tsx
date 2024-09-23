import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css';
const listData = [
  {
    id: 1,
    title: '音频标注',
    description: '音频标注',
    image: '/images/swiper1.png'
  },
  {
    id: 2,
    title: 'BEV3D标注',
    description: 'BEV3D标注',
    image: '/images/swiper2.png'
  },
  {
    id: 3,
    title: '语义分割',
    description: '语义分割',
    image: '/images/swiper3.png'
  },
  {
    id: 4,
    title: '图像标注',
    description: '图像标注',
    image: '/images/swiper4.png'
  },
  {
    id: 5,
    title: 'RLHF标注',
    description: 'RLHF标注',
    image: '/images/swiper2.png'
  }
];
const ScreenSwiper = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-fill-color font-normal mb-10 text-xl text-[#FEFEFE] bg-gradient-to-r from-[#0369E5] from-0% via-[#04DAFC] via-52.9296875% to-[#0369E5] to-100% bg-clip-text">
          Intelligent Annotation Platform
        </div>
        <div className="font-extrabold text-[#FEFEFE] text-6xl mb-11">
          憬象智能标注平台
        </div>
        <div className="mb-24 text-[#CACACA] text-xl px-[700px] leading-6 text-center tracking-wider">
          憬象智能标注平台支持全工业门类标注任务，在以人为基础的框架下，充分结合了AI算法的能力，从而实现包括RLHF标注，
          BEV4D标注分割，音频标注，文本标注，骨骼关键点标注等全任务类型标注工作的高效且高质量交付能力。
        </div>
        <div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            loop
            spaceBetween={50}
          >
            {listData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-item">
                <div
                  className="item-content"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* <div className="item-img">
                    <img src={item.image} alt="这是一个图片" />
                  </div> */}
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.description}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ScreenSwiper;
