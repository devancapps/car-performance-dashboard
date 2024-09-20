import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function ThreeDCarModel({ alerts, performance }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Create car body
    const bodyGeometry = new THREE.BoxGeometry(2, 1, 4);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x3D7B7B });
    const carBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(carBody);

    // Add wheels
    const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const wheelPositions = [
      [-1, -0.5, 1.5],
      [1, -0.5, 1.5],
      [-1, -0.5, -1.5],
      [1, -0.5, -1.5]
    ];
    wheelPositions.forEach(position => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.position.set(...position);
      wheel.rotation.z = Math.PI / 2;
      carBody.add(wheel);
    });

    // Add windows
    const windowGeometry = new THREE.PlaneGeometry(1.8, 0.8);
    const windowMaterial = new THREE.MeshPhongMaterial({ color: 0xaaaaff, transparent: true, opacity: 0.5 });
    const frontWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow.position.set(0, 0.5, 1.5);
    frontWindow.rotation.x = Math.PI / 2;
    carBody.add(frontWindow);

    // Add lights
    const headlightGeometry = new THREE.CircleGeometry(0.2, 32);
    const headlightMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00, emissive: 0xffff00 });
    const headlightPositions = [
      [-0.8, 0, 2],
      [0.8, 0, 2]
    ];
    headlightPositions.forEach(position => {
      const headlight = new THREE.Mesh(headlightGeometry, headlightMaterial);
      headlight.position.set(...position);
      carBody.add(headlight);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Highlight parts based on alerts
    const highlightPart = (part, color) => {
      part.material.emissive.setHex(color);
    };

    if (alerts.engine) highlightPart(carBody, 0xff0000);
    if (alerts.tire) wheelPositions.forEach((_, i) => highlightPart(carBody.children[i], 0xff0000));

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [alerts, performance]);

  return <div ref={mountRef} className="three-d-model"></div>;
}

export default ThreeDCarModel;