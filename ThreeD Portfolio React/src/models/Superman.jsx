import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import supermanScene from "../assets/3d/superman.glb";

// 3D Model from: https://sketchfab.com/3d-models/superman-flying-4e1aaf9c85e344c39c6ca097670074d8
export function Superman({ isRotating, ...props }) {
  const ref = useRef();
  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(supermanScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["mixamo.com"].play();
    } else {
      actions["mixamo.com"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref} >
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}