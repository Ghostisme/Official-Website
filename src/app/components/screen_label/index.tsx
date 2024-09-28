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
