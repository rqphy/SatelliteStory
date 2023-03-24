export default function Loader({ hasStarted, onStart }) {
	return (
		<section className={`loader ${hasStarted ? "loader_started" : ""}`}>
			<button onClick={onStart}>Enter the experience</button>
		</section>
	)
}
