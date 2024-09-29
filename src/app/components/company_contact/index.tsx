const Contact = () => {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="w-screen h-screen flex flex-col items-center justify-end">
        <div className="mb-40 grid gap-20">
          <div className="w-full flex items-center justify-center">
            <div className="text-[#FEFEFE] font-extrabold text-6xl">
              联系我们
            </div>
          </div>
          <div className="grid gap-5">
            <div className="font-normal text-[#FEFEFE] text-xl">
              业务咨询：business@panorobo.com
            </div>
            <div className="font-normal text-[#FEFEFE] text-xl">
              招聘相关：recruitment@panorobo.com
            </div>
            <div className="font-normal text-[#FEFEFE] text-xl">
              投资机构：investment@panorobo.com
            </div>
            <div className="font-normal text-[#FEFEFE] text-xl">
              违规举报：violation-reporting@panorobo.com
            </div>
          </div>
        </div>
        <div className="w-full h-64 bg-transparent">
          <div className="w-full h-full bg-[url('/images/footer-img@2x.png')] bg-cover bg-clip-content bg-center bg-origin-content bg-local bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
