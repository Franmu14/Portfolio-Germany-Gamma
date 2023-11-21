import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import hummingbirdScene from "../assets/3d/hummingbird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Hummingbird() {
  const hummingbirdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(hummingbirdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, hummingbirdRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["05_Colibri_Bird.001Action"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    hummingbirdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (hummingbirdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      hummingbirdRef.current.rotation.y = Math.PI;
    } else if (hummingbirdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      hummingbirdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (hummingbirdRef.current.rotation.y === 0) {
      // Moving forward
      hummingbirdRef.current.position.x += 0.01;
      hummingbirdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      hummingbirdRef.current.position.x -= 0.01;
      hummingbirdRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={hummingbirdRef} position={[-5, 2, 1]} scale={[3, 3, 3]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
