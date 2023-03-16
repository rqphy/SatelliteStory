import { useGLTF } from "@react-three/drei"

export default function Planet() {
	const planet = useGLTF("./low_poly_planet_earth/scene.gltf")

	return (
		<primitive
			object={planet.scene}
			scale={2.5}
			rotation={[0, Math.PI * 2.2, 0]}
			position={[0, -6, 0]}
		/>
	)
}
