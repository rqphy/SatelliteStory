import Experience from "../../components/experience/experience"
import Popup from "../../components/popup/popup"
import Loader from "../../components/loader/loader"
import { Suspense, useState } from "react"

export default function Home() {
	const [hasStarted, setHasStarted] = useState(false)

	return (
		<>
			<Popup />
			<Suspense fallback={null}>{hasStarted && <Experience />}</Suspense>
			<Loader
				hasStarted={hasStarted}
				onStart={() => setHasStarted(true)}
			/>
		</>
	)
}
