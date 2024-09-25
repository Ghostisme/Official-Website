import './index.css';
const HomeScreen = () => {
  // useEffect(() => {
  // }, []);
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen bg-[url('/images/A020_-Y12854666.png')] bg-cover bg-clip-content bg-center bg-origin-content bg-local bg-no-repeat">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="grid justify-center items-center">
            <div className="text-white font-extrabold text-6xl mb-8">
              憬通万物 象启未来
            </div>
            <div className="text-white font-extrabold text-6xl mb-8">
              憬象助力唤醒您的AI应用
            </div>
            <div className="mb-8 text-[#fefefe] font-normal text-xl">
              全领域覆盖，大模型赋能，憬象AI以更好的数据，与您加速共创明日世界。
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
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
