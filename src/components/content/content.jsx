import Animated from "react-mount-animation"
import { useState } from "react"

const mountAnimation = ` 
    0% {opacity: 0}
    100% {opacity: 1}
`

const unmoutAnimation = ` 
    0% {opacity: 1}
    100% {opacity: 0}
`

export default function Content({ children }) {
	const [isMounted, setIsMounted] = useState(false)
	return (
		<Animated.div
			className="content"
			show={isMounted}
			mountAnim={mountAnimation}
			unmountAnim={unmoutAnimation}
			time={0.6}
		>
			{children}
		</Animated.div>
	)
}
