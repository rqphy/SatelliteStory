import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-1, -1, 6],
			}}
		>
			<OrbitControls
				enableDamping={true}
				enablePan={false}
				minPolarAngle={Math.PI / 2.06}
				maxPolarAngle={0}
				dampingFactor={0.05}
				rotateSpeed={0.3}
				maxDistance={8.0}
				minDistance={3.8}
			/>
			<directionalLight
				castShadow
				position={[3, 1, 0.5]}
				intensity={1.5}
				shadow-normalBias={0.09}
				color={"#e8dfdd"}
			/>
			<ambientLight intensity={0.2} />
			<mesh>
				<boxGeometry />
				<meshBasicMaterial color={"red"} />
			</mesh>
		</Canvas>
	)
}
