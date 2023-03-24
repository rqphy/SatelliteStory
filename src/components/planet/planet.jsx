import { useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import useMessage from "../../stores/useMessage"

export default function Planet() {
	const setMessageId = useMessage((state) => state.setMessageId)
	const messagesLength = useMessage((state) => state.messagesLength)

	const updateMessageId = (scrollOffset) => {
		let tempId = -1

		for (let i = 0; i < messagesLength; i++) {
			if (
				scrollOffset >= 0.02 + i / messagesLength - 0.02 &&
				scrollOffset < 0.12 + i / messagesLength
			) {
				tempId = i
				break
			}
		}
		setMessageId(tempId)
	}

	const planetRef = useRef()
	const planet = useGLTF(
		"./earth/scene.gltf"
		// "./planet_earth_alt-drag_to_change_lighting/scene.gltf"
	)
	const data = useScroll()

	useFrame(() => {
		const currentScrollOffset = data.offset
		// Update planet rotation
		planetRef.current.rotation.x = currentScrollOffset * Math.PI

		// update message
		updateMessageId(currentScrollOffset)
	})

	return (
		<primitive
			ref={planetRef}
			object={planet.scene}
			scale={2.5}
			rotation={[0, Math.PI * 0.1, Math.PI * 1.8]}
			position={[0, -3, 0]}
		/>
	)
}
