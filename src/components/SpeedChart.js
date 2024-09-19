import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function SpeedChart({ data }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Create a circular gauge
    const gauge = new THREE.Mesh(
      new THREE.CircleGeometry(1, 32),
      new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    scene.add(gauge);

    // Create a needle
    const needle = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 1, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    needle.position.y = 0.5;
    scene.add(needle);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the needle based on speed
      needle.rotation.z = THREE.MathUtils.degToRad((data.current / data.max) * 180 - 90);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [data]);

  return (
    <div className="chart">
      <h2>Speed</h2>
      <div ref={mountRef}></div>
      <p>Current: {data.current} km/h</p>
      <p>Max: {data.max} km/h</p>
    </div>
  );
}

export default SpeedChart;