import { useGLTF } from "@react-three/drei"

export default function Satellite() {
	const satellite = useGLTF("./satellite/scene.gltf")

	return (
		<primitive
			object={satellite.scene}
			scale={0.00002}
			rotation={[Math.PI * 0.5, 0, 0]}
			position={[0, 0, 2]}
		/>
	)
}
