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
    title: '点云标注',
    description: '点云工具可对三维空间的单帧或多帧数据进行精准标注，从而提高自动驾驶算法的感知能力',
    image: '/images/dianyun.png'
  },
  {
    id: 2,
    title: '生成式标注',
    description: 'RLHF标注工具为LLM的微调和奖励模型的训练提供高效的标注方式，支持有害语料标注、人工打分排序等标注场景。',
    image: '/images/shengchengshi.png'
  },
  {
    id: 3,
    title: '图像标注',
    description: '图像标注工具支持从基本的矩形框、多边形到高级的像素级标注，适用于各种图像识别和处理任务',
    image: '/images/tuxiang.jpg'
  },
  {
    id: 4,
    title: '文本标注',
    description: '文本标注工具帮助您标记和分类文本数据，同时也支持大语言模型 RLHF 中的多种任务需求。',
    image: '/images/wenben.png'
  },
  {
    id: 5,
    title: '音频标注',
    description: '语音标注工具能够精确识别和分类声音数据，适用于各类语音的标注需求。',
    image: '/images/yinpin.jpg'
  },
  {
    id: 6,
    title: '语义分割',
    description: '语义分割',
    image: '/images/yuyifenge.jpg'
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
        <div style={{ width: '100vw' }}>
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
