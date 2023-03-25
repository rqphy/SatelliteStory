import "./loader.scss"
import { useProgress } from "@react-three/drei"

export default function Loader({ hasStarted, onStart }) {
	const { progress } = useProgress()

	return (
		<section className={`loader ${hasStarted ? "loader_started" : ""}`}>
			<div className="loader__title">
				<p>Welcome to,</p>
				<h1>A Satellite Story</h1>
			</div>
			<div className="loader__orbit"></div>
			<button disabled={progress < 100} onClick={onStart}>
				Enter the experience {progress}
			</button>
		</section>
	)
}
