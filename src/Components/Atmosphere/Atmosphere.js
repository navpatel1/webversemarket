import { Sky, Cloud } from '@react-three/drei';
import { Suspense } from 'react';




function Atmosphere() {
    return (<group>
        <Sky
            distance={450000}
            sunPosition={[5, 2, 5]}
            inclination={0}
            azimuth={0.25} />

        <Suspense fallback={null}>
            <Cloud position={[250, 150, 100]} speed={3} opacity={1} segments={100} />
            <Cloud position={[250, 150, 100]} speed={0.2} opacity={1} segments={100} />
            <Cloud position={[0, 150, 150]} speed={0.2} opacity={1} segments={100
            } />
            <Cloud position={[-100, 150, 10]} speed={0.2} opacity={1} segments={100} />
            <Cloud position={[50, 100, -125]} speed={0.2} opacity={0.75} segments={100} />
        </Suspense>


    </group>);
}
export default Atmosphere;