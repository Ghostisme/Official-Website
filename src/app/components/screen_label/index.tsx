import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const itemsData = [
  {
    id: 1,
    title: '大模型标注',
    description:
      '结合视觉与激光雷达通用大模型的数据标注工具，在人机协同的标注模式下，支持智能标注和质检，可大幅提高标注效率，降低标注成本。',
    image: '/images/label-left.png',
    className: 'mr-[94px]'
  },
  {
    id: 2,
    title: 'RLHF标注',
    description:
      '通过世界一流的RLHF、数据生成、模型评估、安全和对齐技术，为大语言模型提供数据支持，帮助提高模型泛化能力。',
    image: '/images/label-right.png'
  }
];

const LabelScreen = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="flex">
        {itemsData.map(({ className, image, title, description, id }) => (
          <div
            key={id}
            className={twMerge(
              'w-[43.75rem] h-[43.75rem] border-solid border-[#4C4C4C] border-[0.3125rem] bg-gray-900	 rounded-[2.625rem] px-[2.625rem]',
              className
            )}
          >
            <div className='w-[34.25rem] h-[34.25rem] relative'>
              <Image alt={title} fill src={image} />
            </div>
            <div className="text-[2.8125rem] text-white">{title}</div>
            <div className="text-[#CACACA] text-[1.25rem] leading-5">
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelScreen;
