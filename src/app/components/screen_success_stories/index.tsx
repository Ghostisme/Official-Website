import { twMerge } from 'tailwind-merge';
import './index.css';
const storiesList = [
  {
    id: 1,
    logo: '/images/panorobo.png',
    bgimg: '/images/stories1.jpg',
    title: '智阳后装ADAS AI标注项目',
    // AI标注项目
    description:
      '智阳公司面向DVR后端市场，约有500万用户群体，憬象智能在该项目中主要为客户完成前方车辆、行人及车道线相关标注任务。',
    className: 'mr-10'
  },
  {
    id: 2,
    logo: '/images/panorobo.png',
    bgimg: '/images/stories1.jpg',
    title: '中德智研',
    description:
      '智阳公司面向DVR后端市场，约有500万用户群体，憬象智能在该项目中主要为客户完成前方车辆、行人及车道线相关标注任务。'
  }
];
const SuccessStories = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-fill-color font-normal mb-10 text-xl text-[#FEFEFE] bg-gradient-to-r from-[#0369E5] from-0% via-[#04DAFC] via-52.9296875% to-[#0369E5] to-100% bg-clip-text">
          SUCCESS CASES
        </div>
        <div className="font-extrabold text-[#FEFEFE] text-6xl mb-10">
          成功案例
        </div>
        <div className="w-screen stories-content flex items-center justify-center">
          {storiesList.map((item) => (
            <div
              className={twMerge(
                'content-item p-6 border-4 border-[#4c4c4c] bg-[#6c6c6c]/[50%]',
                item.className,
                `bg-cover bg-clip-border bg-center bg-origin-border bg-local bg-no-repeat`
              )}
              key={item.id}
              style={{ backgroundImage: `url(${item.bgimg})` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="item-logo flex items-center justify-end">
                  <img src={item.logo} alt="这是一个图片" />
                </div>
                <div className="flex flex-col">
                  <div className="item-title mb-8 text-[#fefefe] text-4xl font-extrabold">
                    {item.title}
                  </div>
                  <div className="item-desc font-normal text-xl text-[#cacaca]">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
