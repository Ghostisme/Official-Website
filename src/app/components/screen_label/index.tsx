import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const itemsData = [
  {
    title: '大模型标注',
    description:
      '视觉通用大模型，激光雷达通用大模型，有效提升标注质量，同时大幅提升标注成本。',
    image: '/images/label-left.png',
    className: 'mr-[94px]'
  },
  {
    title: 'RLHF标注',
    description:
      '视觉通用大模型，激光雷达通用大模型，有效提升标注质量，同时大幅提升标注成本。',
    image: '/images/label-right.png'
  }
];

const LabelScreen = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center">
      <div className="flex">
        {itemsData.map(({ className, image, title, description }) => (
          <div
            className={twMerge(
              'w-[600px] h-[700px] border-solid border-[#4C4C4C] border-[5px] bg-gray-900	 rounded-[10px] px-[42px]',
              className
            )}
          >
            <Image alt={title} width={548} height={548} src={image} />
            <div className="text-[45px] text-white">{title}</div>
            <div className="text-[#CACACA] text-[20px] leading-5">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelScreen;
