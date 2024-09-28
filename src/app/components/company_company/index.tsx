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
const CompanyContent = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-full company-container flex flex-col items-center justify-start">
          <div className="top-content w-full bg-transparent z-10 flex items-start justify-start">
            <div className="top-img">
              <img
                className="w-full h-full"
                src="/images/swiper1.png"
                alt="这是一个图片"
              />
            </div>
          </div>
          <div className="center-content w-full flex items-start justify-start relative z-0">
            <div className="bg-[#1D1D1D] w-full h-full content-text relative">
              <div className='absolute z-10'>
              <div className="text-[#FEFEFE] font-extrabold text-7xl mb-12">
                公司大事记
              </div>
              <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                2024年07月，公司成立
              </div>
              <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                2024年08月，与智阳科技签订合作协议
              </div>
              <div className="text-[#FEFEFE] font-normal text-2xl mb-10">
                2024年09月，与中德智研签订合作协议
              </div>
              </div>
             
              {/* <div className="text-[#FEFEFE] font-normal text-2xl">
                坦诚务实：彼此坦诚敢于背靠背务实合作。
              </div> */}
            <div className="w-full bg-transparent absolute z-0 top-60 ml-10">
            <div className="content-box">
              <div className="flex items-center mr-24">
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
              <div className="flex items-center  mr-24">
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
            <div className="bg-white w-3 h-48 mt-2 ml-3"></div>
            <div className="text-[#FEFEFE] font-extrabold mt-8 ml-6 text-5xl title-text">
              CPMPANY
            </div>
        
          </div>
          {/* */}
        </div>
      </div>
    </div>
  );
};

export default CompanyContent;
