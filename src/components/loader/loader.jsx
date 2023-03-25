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
			<button
				className="loader__cta"
				disabled={progress < 100}
				onClick={onStart}
			>
				<p>{progress < 100 ? "Loading..." : "Enter the experience"}</p>
				<div
					className="loader__progress"
					style={{ left: `${progress - 100}%` }}
				></div>
			</button>
		</section>
	)
}
