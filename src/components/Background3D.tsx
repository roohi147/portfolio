import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Particle geometry
    const particlesCount = window.innerWidth < 768 ? 400 : 1000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    // Colors list for glowing particles (purple, pink, cyan)
    const colorPalette = [
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#ec4899'), // Pink
      new THREE.Color('#06b6d4'), // Cyan
    ];

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Spread particles in a box
      positions[i] = (Math.random() - 0.5) * 80;
      positions[i + 1] = (Math.random() - 0.5) * 80;
      positions[i + 2] = (Math.random() - 0.5) * 80;

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colors, 3)
    );

    // Circular particle texture using canvas
    const createCircleTexture = () => {
      const matCanvas = document.createElement('canvas');
      matCanvas.width = 16;
      matCanvas.height = 16;
      const matCtx = matCanvas.getContext('2d');
      if (matCtx) {
        const gradient = matCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        matCtx.fillStyle = gradient;
        matCtx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(matCanvas);
    };

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.45,
      map: createCircleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Floating Mesh 1: Torus Knot
    const knotGeom = new THREE.TorusKnotGeometry(6, 1.8, 120, 16);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const knotMesh = new THREE.Mesh(knotGeom, knotMat);
    knotMesh.position.set(-15, 8, -5);
    scene.add(knotMesh);

    // Floating Mesh 2: Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoMat);
    icoMesh.position.set(18, -10, -5);
    scene.add(icoMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse interactions
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Check light theme class on document element
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        // Change canvas clear or opacity behavior if needed
        knotMat.opacity = 0.08;
        icoMat.opacity = 0.1;
        particlesMaterial.opacity = 0.6;
        knotMat.color.setHex(0x4f46e5); // Indigo
        icoMat.color.setHex(0xdb2777); // Pink
      } else {
        knotMat.opacity = 0.12;
        icoMat.opacity = 0.15;
        particlesMaterial.opacity = 1;
        knotMat.color.setHex(0x8b5cf6);
        icoMat.color.setHex(0xec4899);
      }
    };

    // Poll for class changes on documentElement
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    checkTheme(); // run once initially

    // Animation Loop
    const clock = new THREE.Clock();
    let frameId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Spin meshes
      knotMesh.rotation.x = elapsedTime * 0.15;
      knotMesh.rotation.y = elapsedTime * 0.1;
      
      icoMesh.rotation.x = elapsedTime * -0.1;
      icoMesh.rotation.y = elapsedTime * 0.2;

      // Mouse smoothing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Parallax camera move
      camera.position.x = targetX * 0.5;
      camera.position.y = -targetY * 0.5;
      camera.lookAt(scene.position);

      // Rotate particle cloud slowly
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Render
      renderer.render(scene, camera);

      frameId = window.requestAnimationFrame(tick);
    };

    tick();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Dispose materials/geometries
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      knotGeom.dispose();
      knotMat.dispose();
      icoGeom.dispose();
      icoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} id="particle-canvas" className="fixed inset-0 w-full h-full -z-10" />;
};
export default Background3D;
