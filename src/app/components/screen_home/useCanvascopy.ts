import { useRef, useState } from 'react';

const useCanvas = () => {
  const canvas = useRef(null as unknown as HTMLCanvasElement);
  // const ctx = canvas.current.getContext('2d');
  const [ctx, setCtx] = useState(null as any);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [a, setA] = useState(0.2);
  const [t, setT] = useState(0);
  const initPi = Math.PI * 0.01;
  const [aStep, setAStep] = useState(initPi);
  const [globalHue, setGlobalHue] = useState(0);
  const init = () => {
    console.log(canvas.current, '===sadadas');
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    const newCtx = canvas.current.getContext('2d');
    console.log(newCtx, 'newCtx');
    setCtx(newCtx);
    window.addEventListener('mousemove', (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    });
    ctx && update();
  };
  const update = () => {
    requestAnimationFrame(update);
    const time = performance.now() / 60;
    const newA = Math.sin(2 - time * 0.0001);
    const newT = Math.sin(2 + time * 0.03);
    setA(newA);
    setT(newT);
    const newAStep = Math.PI * (0.375 + Math.sin(time * 0.001) * 0.125);
    setAStep(newAStep);
    const newGlobalHue = globalHue + 10;
    setGlobalHue(newGlobalHue);
    console.log(ctx, ' ctx');
    draw();
  };
  const draw = () => {
    if (ctx) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      let x = 0,
        y = 0,
        px: number,
        py: number;
      let radius = 0,
        pradius = 0;
      const totalAngle = Math.PI * 200;
      for (let theta = 0; theta < totalAngle; theta += aStep) {
        pradius = radius;
        radius = (t + Math.pow(2, Math.cos(theta * a))) * 200;
        px = x;
        py = y;
        x = cx + Math.cos(theta) * radius;
        y = cy + Math.sin(theta) * radius;

        if (theta > 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(px, py);

          const dx = x - px;
          const dy = y - py;
          const lineSize = Math.sqrt(dx * dx + dy * dy);

          const r = pradius + (radius - pradius) / 2;

          const hue = globalHue + (theta / Math.PI) * 180;
          ctx.strokeStyle = 'hsl(' + hue + ', 100%, 50%)';
          //ctx.lineWidth=clamp(map(r, -200, 200, 0.25, 2), 0.25, 10);
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };
  const map = (
    value: number,
    start1: number,
    stop1: number,
    start2: number,
    stop2: number
  ): number => {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  };
  const clamp = (value: number, min: number, max: number): number => {
    return value < min ? min : value > max ? max : value;
  };
  return [canvas, init];
};
export default useCanvas;
