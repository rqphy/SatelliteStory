import { Canvas } from "@react-three/fiber"
import { ScrollControls } from "@react-three/drei"
import Planet from "../planet/planet"
import Satellite from "../satellite/satellite"

export default function Experience() {
	return (
		<Canvas
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [0, 0, 3],
			}}
		>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
			/>
			<ambientLight intensity={0.2} />
			<ScrollControls pages={16} damping={0.3}>
				<Planet />
			</ScrollControls>
			<Satellite />
		</Canvas>
	)
}
