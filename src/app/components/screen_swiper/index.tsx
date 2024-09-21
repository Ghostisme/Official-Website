import { Swiper } from 'swiper/react';
import './index.css';
const listData = [
  {
    id: 1,
    title: '',
    description: '',
    image: '/images/label-right.png'
  }
];
const ScreenSwiper = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-fill-color font-normal mb-10 text-xl text-[#FEFEFE] bg-gradient-to-r from-[#0369E5] from-0% via-[#04DAFC] via-52.9296875% to-[#0369E5] to-100% bg-clip-text">
          {/* style={'-webkit-text-fill-color: transparent;'} */}
          Intelligent Annotation Platform
        </div>
        <div className="font-extrabold text-[#FEFEFE] text-6xl mb-11">
          憬象智能标注平台
        </div>
        <div className="text-[#CACACA] text-xl px-[700px] leading-6 text-center tracking-wider">
          憬象智能标注平台支持全工业门类标注任务，在以人为基础的框架下，充分结合了AI算法的能力，从而实现包括RLHF标注，
          BEV4D标注分割，音频标注，文本标注，骨骼关键点标注等全任务类型标注工作的高效且高质量交付能力。
        </div>
        <div>
          <Swiper></Swiper>
        </div>
      </div>
    </div>
  );
};

export default ScreenSwiper;
