import { Environment, OrbitControls } from "@react-three/drei";
// import Dragon from "../../../public/models/dragon/Dragon";
import Spiderman from "../../../public/models/spiderman/Spiderman";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <Environment preset="sunset" />

      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={1024}
      />

      <group position={[0, -1, 0]}>
        {/* <Dragon scale={[0.2, 0.2, 0.2]} /> */}
        <Spiderman scale={[0.2, 0.2, 0.2]} />
      </group>

      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};

export default Experience;
