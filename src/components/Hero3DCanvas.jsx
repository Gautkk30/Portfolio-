import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting setup matching Stitch design
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x0066ff, 3, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2, 50);
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    // Central 3D Refractive Glass Sphere
    const geometry = new THREE.SphereGeometry(2.2, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.22,
      shininess: 100,
      reflectivity: 0.9,
      emissive: 0x001133,
      wireframe: false,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner wireframe sphere for technical depth
    const innerGeom = new THREE.IcosahedronGeometry(1.6, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x6568f3,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerSphere = new THREE.Mesh(innerGeom, innerMat);
    scene.add(innerSphere);

    // Floating Technology Code Particles/Cubes
    const particles = [];
    const particleCount = 18;
    const colors = [0x0066ff, 0xa855f7, 0xc3c5da, 0x10b981];

    for (let i = 0; i < particleCount; i++) {
      const pGeom = new THREE.BoxGeometry(0.22, 0.22, 0.22);
      const color = colors[i % colors.length];
      const pMat = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.8,
      });
      const p = new THREE.Mesh(pGeom, pMat);
      p.position.set(
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 8
      );
      scene.add(p);
      particles.push({
        mesh: p,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.001 + Math.random() * 0.002,
        initialY: p.position.y,
        offset: Math.random() * Math.PI * 2,
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * -2;
    };

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Sphere Rotations
      sphere.rotation.y += 0.004;
      sphere.rotation.x += 0.002;
      innerSphere.rotation.y -= 0.006;
      innerSphere.rotation.x -= 0.003;

      // Mouse Parallax smooth lerp
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Particle floating animations
      particles.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 2 + item.offset) * 0.4;
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1] opacity-60 flex justify-center items-center pointer-events-none">
      <div ref={containerRef} className="w-full h-full max-w-4xl" />
    </div>
  );
}
