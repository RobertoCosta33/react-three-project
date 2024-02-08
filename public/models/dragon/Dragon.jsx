import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useCharactersAnimations } from "@/contexts/CharactersAnimations/CharactersAnimations";

const Dragon = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../models/dragon/dragon.gltf"
  );

  const { setAnimations, animationIndex } = useCharactersAnimations();

  const { actions, names } = useAnimations(animations, group);
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <mesh onClick={() => setAnimationsReady(!animationsReady)}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="Mon_BlackDragon31_SkeletonFBX"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.025}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                    <group
                      name="Mon_BlackDragon31"
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <skinnedMesh
                      castShadow
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.M_Mon_BlackDragon31a}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      castShadow
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.M_Mon_BlackDragon31b}
                      skeleton={nodes.Object_8.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </mesh>
  );
};

export default Dragon;

useGLTF.preload("../models/dragon/dragon.gltf");
