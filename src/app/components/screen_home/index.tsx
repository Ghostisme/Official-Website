import './index.css';
const HomeScreen = () => {
  // useEffect(() => {
  // }, []);
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen bg-[url('/images/A020_-Y12854666.png')] bg-cover bg-clip-content bg-center bg-origin-content bg-local bg-no-repeat">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="grid justify-center items-center">
            <div className="text-white font-bold text-6xl mb-8">
              憬通万物 象启未来
            </div>
            <div className="text-white font-bold text-6xl mb-8">
              憬象助力唤醒您的AI应用
            </div>
            <div className="mb-8">
              这里要不要加点什么内容介绍之类......感觉有点空
            </div>
            <div>
              <div className="flex items-center justify-start">
                <div className="mr-5 text-center cursor-pointer">
                  <div className="rounded-lg border-2 border-solid border-transparent px-14 py-4 text-center bg-[#6C6C6C]/[22%] free-shadow">
                    免费试用
                  </div>
                </div>
                <div className="cursor-pointer text-center">
                  <div className="rounded-lg border-2 border-solid border-transparent px-14 py-4 text-center bg-[#0F0F0F]/[22%] shadow-box shadow-[#FEFEFE]">
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
