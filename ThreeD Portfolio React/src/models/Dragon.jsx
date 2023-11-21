import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import dragonScene from "../assets/3d/dragon.glb";

// 3D Model from: https://sketchfab.com/3d-models/dragon-fantasy-ffe005ed8976412cb81c19d9395c00ae
export function Dragon() {
  const dragonRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(dragonScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, dragonRef);

  // Play the "flying" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["flying"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (dragonRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      dragonRef.current.rotation.y = Math.PI;
    } else if (dragonRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      dragonRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (dragonRef.current.rotation.y === 0) {
      // Moving forward
      dragonRef.current.position.x += 0.01;
      dragonRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      dragonRef.current.position.x -= 0.01;
      dragonRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={dragonRef} position={[-5, 4, 1]} scale={[0.3, 0.3, 0.3]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
