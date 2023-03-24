import { Canvas,  } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import BlueFlame from "./components/BlueFlame";

import styles from "./App.module.css"

function App() {
  return (
    <Canvas style={styles}>
      <OrbitControls />
      <PerspectiveCamera makeDefault fov={75} position={[0, 5, -30]} />
      <BlueFlame />
    </Canvas>
  );
}

export default App;
