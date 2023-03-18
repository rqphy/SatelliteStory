import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Planet() {
	const planetRef = useRef()
	const planet = useGLTF(
		"./planet_earth_alt-drag_to_change_lighting/scene.gltf"
	)
	const data = useScroll()

	useFrame(() => {
		planetRef.current.rotation.x = data.offset * Math.PI
	})

	return (
		<primitive
			ref={planetRef}
			object={planet.scene}
			scale={2.5}
			rotation={[0, 0, Math.PI * 0.5]}
			position={[0, -3, 0]}
		/>
	)
}
