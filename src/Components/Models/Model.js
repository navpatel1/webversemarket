import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";

// function Model(props) {
//     const group = useRef();
//     const { nodes, materials } = useGLTF('/supermarket.glb');
//     console.log(nodes, materials);
//     return <group ref={group}{...props} dispose={null}>
//         <mesh
//             scale={[0.02, 0.02, 0.02]} position={[0, 0, 0]} geometry={nodes.SM_Bench01.geometry} material={materials.MI_Streetpot_Inst} />
//         <mesh scale={[0.02, 0.02, 0.02]} castShadow receiveShadow position={[0, 0, 0]} geometry={nodes.SM_ParkingLot_Base.geometry} material={materials.M_M_SM_ParkingLot_Base_MI_Asphalt01_Inst_E0FC3D484DB4A5_fbff8cb} />
//     </group>
// }

function Model() {
    const gltf = useGLTF('/supermarket.glb');
    console.log(gltf);
    return (<Suspense>
        <primitive object={gltf.scene} />
    </Suspense>)
}
export default Model;

