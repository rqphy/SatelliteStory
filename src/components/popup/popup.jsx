import useMessage from "../../stores/useMessage"
import { useEffect } from "react"

export default function Popup() {
	const messageId = useMessage((state) => state.messageId)
	const setMessagesLength = useMessage((state) => state.setMessagesLength)

	const messages = [
		<article>
			<span>Welcome to,</span>
			<h1>Satellite Story</h1>
		</article>,
		<article>
			Sputnik is the first human made satellite. It was launched October
			4, 1957 by the Soviet Union.
		</article>,
		<article>
			It only spent 22 days in orbit but it was enough to motivate NASA to
			join the space race.
		</article>,
		<article>
			Since then, countries have launched over 5000 satellites around
			earth.
		</article>,
		<article>
			They are able to stay in orbit by bouncing two forces: Centrifugal
			Force and Gravity.
		</article>,
		<article>
			Satellites have multiple purposes. They are communication satellite
			that help with radio, tv and telephone signals. They are GPS
			satellite that help us determine where we are on the Earth.
		</article>,
		<article>
			Discover more projects on my{" "}
			<a
				href="https://ferreira-raphael.netlify.app"
				target="_blank"
				rel="noopener noreferrer"
			>
				portfolio
			</a>
			.
		</article>,
	]

	useEffect(() => {
		setMessagesLength(messages.length)
	}, [])

	return <div className="popup">{messages[messageId]}</div>
}
