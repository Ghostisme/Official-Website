import './index.css';
const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
];
const Values = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full h-full flex items-center justify-end">
          <div className="w-full content-container flex flex-col items-center justify-end">
            <div className="top-content w-full bg-transparent z-10 flex items-start justify-end">
              <div className="top-img">
                <img
                  className="w-full h-full"
                  src="/images/swiper1.png"
                  alt="这是一个图片"
                />
              </div>
            </div>
            <div className="center-content w-full flex items-start justify-start">
              <div className="text-[#FEFEFE] font-extrabold mt-8 mr-6 text-5xl title-text">
                VALUES
              </div>
              <div className="bg-white w-3 h-48 mt-2 mr-3"></div>
              <div className="bg-[#1D1D1D] w-full h-full content-text relative">
                <div className='absolute z-10'>
                  <div className="text-[#FEFEFE] font-extrabold text-7xl mb-12">
                    我们的价值观
                  </div>
                  <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                    技术引领：以技术为锚，坚持以技术为核心驱动力，快速形成具有跨级优势的产品。
                  </div>
                  <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                    持续进化：公司持续进化，技术持续进化，产品力持续进化，个人持续进化。
                  </div>
                  <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                    客户至上：坚持用好的服务，为客户实现利益价值最大化。
                  </div>
                  <div className="text-[#FEFEFE] font-normal text-2xl">
                    坦诚务实：彼此坦诚敢于背靠背务实合作。
                  </div>
                </div>
                <div className="bg-transparent absolute z-0 left-80 ml-80 top-60">
                  <div className="content-box">
                    <div className="flex items-center justify-center ml-24">
                      <div className="draw-img grid">
                        {arr.map((item, index) => (
                          <div
                            className="flex items-center justify-around"
                            key={index}
                          >
                            {item.map((t) => (
                              <div
                                className="w-2 h-2 rounded-full bg-[#505050]"
                                key={`${index}_${t}`}
                              ></div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="draw-img grid">
                        {arr.map((item, index) => (
                          <div
                            className="flex items-center justify-around"
                            key={index}
                          >
                            {item.map((t) => (
                              <div
                                className="w-2 h-2 rounded-full bg-[#505050]"
                                key={`${index}_${t}`}
                              ></div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-center ml-24">
                      <div className="draw-img grid">
                        {arr.map((item, index) => (
                          <div
                            className="flex items-center justify-around"
                            key={index}
                          >
                            {item.map((t) => (
                              <div
                                className="w-2 h-2 rounded-full bg-[#505050]"
                                key={`${index}_${t}`}
                              ></div>
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="draw-img grid">
                        {arr.map((item, index) => (
                          <div
                            className="flex items-center justify-around"
                            key={index}
                          >
                            {item.map((t) => (
                              <div
                                className="w-2 h-2 rounded-full bg-[#505050]"
                                key={`${index}_${t}`}
                              ></div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
