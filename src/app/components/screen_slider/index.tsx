'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.css';
const menuList = [
  {
    id: 1,
    title: '首页',
    code: 'home',
    href: '/'
  },
  {
    id: 2,
    title: '标注平台',
    code: 'annotation',
    href: '/anno'
  },
  {
    id: 3,
    title: '价格',
    code: 'price',
    href: '/price'
  },
  {
    id: 4,
    title: '公司介绍',
    code: 'company',
    href: '/company'
  }
];
const Slider = () => {
  const [show, SetShow] = useState(false);
  const pathname = usePathname();
  return (
    <div className="w-20 h-screen cursor-pointer fixed left-0 top-0 z-50 bg-transparent transition-all delay-150 hover:w-96 hover:bg-[#FFFFFF]/[10%]">
      {/* <div className="w-96 h-screen cursor-pointer fixed left-0 top-0 z-50 bg-[#FFFFFF]/[10%] transition-all delay-150 hover:w-96 hover:bg-[#FFFFFF]/[10%]"> */}
      <div
        className={twMerge(
          'h-screen flex flex-col items-center justify-start',
          !show && 'pl-8'
        )}
        onMouseEnter={() => SetShow(true)}
        onMouseLeave={() => SetShow(false)}
      >
        {/* onMouseEnter={() => SetShow(true)}
        onMouseLeave={() => SetShow(false)} */}
        {show ? (
          <div className="logo-box-full"></div>
        ) : (
          <div className="logo-box"></div>
        )}
        <div className="flex flex-col items-center justify-center w-full">
          {menuList.map((item) => {
            if (show) {
              return (
                <div
                  key={item.code}
                  className={twMerge(
                    'cursor-pointer w-full h-20 bg-transparent text-[#FEFEFE] font-extrabold text-4xl flex items-center justify-center',
                    pathname === item.href && 'bg-black'
                  )}
                >
                  <Link
                    href={item.href}
                    className={`link ${pathname === item.href ? 'active' : ''}`}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            } else {
              return (
                <div
                  key={item.code}
                  className={twMerge(
                    'w-2 h-2 bg-white rounded-full mb-8',
                    item.code === 'home' && 'w-5 h-5'
                  )}
                ></div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
