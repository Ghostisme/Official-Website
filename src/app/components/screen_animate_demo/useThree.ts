import { useRef } from 'react';
import * as THREE from 'three';
const useThree = () => {
  // 初始化ref
  const dom = useRef(null);
  // 创建3D场景对象Scene
  const scene = new THREE.Scene();
  //创建一个球体几何对象Geometry
  const geometry = new THREE.SphereGeometry(15, 32, 16, 10, 10);
  //创建一个材质对象Material
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.5
  });
  //网格模型对象Mesh // 两个参数分别为几何体geometry、材质material
  const sphere = new THREE.Mesh(geometry, material);
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  // scene.add(sphere);
  sphere.position.set(0, 10, 0);
  scene.add(sphere);
  // AxesHelper：辅助观察的坐标系
  const axesHelper = new THREE.AxesHelper(250);
  scene.add(axesHelper);
  // 光源辅助观察
  // const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  // scene.add(pointLightHelper);
  // 定义threejs输出画布的尺寸(单位:像素px)
  const width = window.innerWidth; //宽度
  const height = window.innerHeight; //高度
  // 实例化一个透视投影相机对象
  const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
  // 根据需要设置相机位置具体值
  camera.position.set(200, 200, 200);
  //相机观察目标指向Threejs 3D空间中某个位置
  camera.lookAt(0, 0, 0); //坐标原点
  // camera.lookAt(sphere.position); //指向mesh对应的位置
  // 创建渲染器对象
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });

  renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
  renderer.render(scene, camera); //执行渲染操作
  document.body.appendChild(renderer.domElement);
  const setDom = (el: any) => {
    console.log(el, 'asdaasd');
    el.current.appendChild(renderer.domElement);
  };
  // 渲染函数
  function render() {
    renderer.render(scene, camera); //执行渲染操作
    sphere.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  }
  return [dom, setDom, render];
};

export default useThree;
