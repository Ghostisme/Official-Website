import './index.css';
const CompanyHome = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen bg-[url('/images/company-bg@2x.png')] bg-contain bg-clip-content bg-center bg-origin-content bg-local bg-no-repeat">
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="content">
            <div className="text-white font-extrabold text-6xl mb-8">
              我们的愿景：
            </div>
            <div className="text-white font-extrabold text-6xl mb-8">
              用数据助力AGI觉醒，
              {/* 标注 */}
            </div>
            <div className="text-white font-extrabold text-6xl mb-8">
              人类美好未来新蓝图。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;
