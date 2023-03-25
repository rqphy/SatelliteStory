import { useGLTF } from "@react-three/drei"

export default function Satellite() {
	const satellite = useGLTF("./sputnik/scene.gltf")

	return (
		<primitive
			object={satellite.scene}
			scale={0.3}
			rotation={[Math.PI * 0, Math.PI * 0, Math.PI * 0]}
			position={[0, -0.2, 0]}
		/>
	)
}
