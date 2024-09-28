const brandList = [
  {
    id: 1,
    img: '/images/logo/meta-logo-bw.png',
    alt: '这是一个图片'
  },
  {
    id: 2,
    img: '/images/logo/nvidia-logo-bw.png',
    alt: '这是一个图片'
  },
  {
    id: 3,
    img: '/images/logo/Stability+AI+logo.png',
    alt: '这是一个图片'
  }
];
const Brand = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-fill-color font-normal mb-10 text-xl text-[#FEFEFE] bg-gradient-to-r from-[#0369E5] from-0% via-[#04DAFC] via-52.9296875% to-[#0369E5] to-100% bg-clip-text">
          Intelligent Annotation Platform
        </div>
        <div className="font-extrabold text-[#FEFEFE] text-6xl mb-11">
          AI赋能的智能标注平台
        </div>
        <div className="mb-24 text-[#CACACA] text-xl px-[700px] leading-6 text-center tracking-wider">
          融合行业近百种AI算法模型，实现AI大模型技术全面赋能全门类标注任务，
          全面提升模型标注质量和标注效率。
        </div>
        <div className="w-screen flex items-center justify-around">
          {brandList.map((item, index) => (
            <div className="border-lg border-white brand-item" key={index} 
            style={{ backgroundImage: `url(${item.img})` }}>

            </div>
          ))}
        </div>
        {/* <div className="border-lg border-white brand-item">LOGO</div> */}
      </div>
    </div>
  );
};

export default Brand;
