import { useProgress } from "@react-three/drei"

export default function Loader({ hasStarted, onStart }) {
	const { progress } = useProgress()
	console.log(progress)

	return (
		<section className={`loader ${hasStarted ? "loader_started" : ""}`}>
			<button disabled={progress < 100} onClick={onStart}>
				Enter the experience {progress}
			</button>
		</section>
	)
}
