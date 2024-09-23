import './index.css';
const whyList = [
  {
    id: 1,
    img: '/images/third-party.png',
    title: '独立的第三方平台',
    description: '您的数据更安全'
    // className: 'color-tag'
  },
  {
    id: 2,
    img: '/images/coverage.png',
    title: '全工业门类覆盖',
    description: '可以满足您任何种类的标注需求'
    // className: 'color-tag'
  },
  {
    id: 3,
    img: '/images/invisibility.png',
    title: 'AI赋能的智能标注平台',
    description: '价格更实惠质量更稳定'
    // className: 'color-tag'
  },
  {
    id: 4,
    img: '/images/precision.png',
    title: '技术专家直接对接',
    description: '确保精准掌握客户需求少走弯路'
    // className: 'color-tag'
  },
  {
    id: 5,
    img: '/images/serve.png',
    title: '坚持服务好客户',
    description: '坚决服务好客户做好口碑'
    // className: 'color-tag'
  }
];
const WhyChoiceScreen = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-fill-color font-normal mb-10 text-xl text-[#FEFEFE] bg-gradient-to-r from-[#0369E5] from-0% via-[#04DAFC] via-52.9296875% to-[#0369E5] to-100% bg-clip-text">
          WHY CHOOSE US
        </div>
        <div className="font-extrabold text-[#FEFEFE] text-6xl mb-10">
          为什么 选择憬象？
        </div>
        <div className="">
          <div className="step-line flex items-center justify-normal flex-1 mb-10">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                className="line-item w-5 min-w-5 min-h-5 h-5 bg-white"
                key={item}
              ></div>
              // <div className="line-item-content w-20 h-20 flex items-center justify-center">
              //   <div className="line-item w-5 h-5 bg-white" key={item}></div>
              // </div>
            ))}
          </div>
          <div className="step-content flex items-center justify-normal flex-1">
            {whyList.map((item) => (
              <div className="step-item-content mr-16" key={item.id}>
                <div className="step-img mb-9 overflow-hidden flex items-center justify-center">
                  <img
                    className="w-20 h-20"
                    src={item.img}
                    alt="这是一个图标"
                  />
                </div>
                <div className="step-title mb-5 w-52 font-extrabold text-[#fefefe] text-center">
                  {item.title}
                </div>
                <div className="step-desc flex items-center justify-center mb-5">
                  <div className="w-36 h-14 font-normal text-xl text-[#cacaca] text-wrap text-center">
                    {item.description}
                  </div>
                </div>
                <div className="step-tag tag-color flex items-center justify-center">
                  <div className="w-14 h-2 bg-[#0369E5]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoiceScreen;
