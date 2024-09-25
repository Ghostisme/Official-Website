import './index.css';
const Footer = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="w-screen h-screen bg-[url('/images/A020_-Y12854666.png')] bg-cover bg-clip-content bg-center bg-origin-content bg-local bg-no-repeat">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="flex justify-between items-center flex-col w-7/12 h-3/5">
            <div className="w-full flex items-start justify-center flex-col pl-3.5">
              <div className="mb-7 text-[#fefefe] text-8xl font-extrabold">
                在这里
              </div>
              <div className="mb-8 text-[#fefefe] text-6xl font-extrabold">
                开始构建您的AI新纪元
              </div>
              <div className="mb-7 text-[#cacaca] font-normal text-xl">
                欢迎试用憬象 welcome
              </div>
              <div>
                <div className="flex items-center justify-start">
                  <div className="mr-5 text-center cursor-pointer">
                    <div className="rounded-lg border-2 border-solid border-transparent px-14 py-4 text-center bg-[#6C6C6C]/[22%] free-shadow text-[#fefefe] font-normal text-xl">
                      免费试用
                    </div>
                  </div>
                  <div className="cursor-pointer text-center">
                    <div className="rounded-lg border-2 border-solid border-transparent px-14 py-4 text-center bg-[#0F0F0F]/[22%] shadow-box shadow-[#FEFEFE] text-[#fefefe] font-normal text-xl">
                      联系专家
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start overflow-hidden">
              <div className="divider w-full h-px bg-[#CACACA] mb-3"></div>
              <div className="flex items-center justify-between w-full">
                <div className="copy font-normal text-[#CACACA] text-xl">
                  备xxxxx
                </div>
                <div className="w-10 h-10 wechat-img">
                  <img
                    className="w-full h-full"
                    src="/images/wechat.png"
                    alt="这是一个图标"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 版权所有 © 2024 憬象智能保留所有权利。 */}
    </div>
  );
};

export default Footer;
