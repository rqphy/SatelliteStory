import { useGLTF } from "@react-three/drei"

export default function Planet() {
	const planet = useGLTF(
		"./planet_earth_alt-drag_to_change_lighting/scene.gltf"
	)

	return (
		<primitive
			object={planet.scene}
			scale={2.5}
			rotation={[0, 0, Math.PI * 0.5]}
			position={[0, -2.5, 0]}
		/>
	)
}
