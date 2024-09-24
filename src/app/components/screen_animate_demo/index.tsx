import { useEffect } from 'react';
import useThree from './useThree';
const Demo = () => {
  const [dom, setDom, render] = useThree();
  useEffect(() => {
    // @ts-ignore
    setDom(dom);
    // render();
  }, []);
  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden">
      <div ref={dom} className="w-screen h-screen overflow-hidden"></div>
    </div>
  );
};

export default Demo;
