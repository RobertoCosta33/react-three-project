import Experience from "@/components/Experience/Experience";
import Interface from "@/components/Interface/Interface";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <div
      style={{
        // width: "100vw",
        // height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas shadows camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
        <Experience />
      </Canvas>

      <Interface />
    </div>
  );
};

export default Home;
