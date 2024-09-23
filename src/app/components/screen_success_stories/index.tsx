import { twMerge } from 'tailwind-merge';
import './index.css';
const storiesList = [
  {
    id: 1,
    logo: '',
    bgimg: '',
    title: '',
    description: '',
    className: 'mr-10'
  },
  {
    id: 2,
    logo: '',
    bgimg: '',
    title: '',
    description: ''
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
              className={twMerge('content-item p-6 h-10*[10]', item.className)}
              key={item.id}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
