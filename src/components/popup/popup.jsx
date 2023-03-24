import useMessage from "../../stores/useMessage"
import { useEffect, useState } from "react"
import { useTransition, animated } from "react-spring"

export default function Popup() {
	const messageId = useMessage((state) => state.messageId)
	const setMessagesLength = useMessage((state) => state.setMessagesLength)

	const messages = [
		<article>
			<span>Welcome to,</span>
			<h1>Satellite Story</h1>
		</article>,
		<article>
			First artificial satellite of Earth, launched by the Soviet Union in
			1957.
		</article>,
		<article>
			Designed by Sergei Korolev, Sputnik 1 was a small spherical
			satellite equipped with several instruments.
		</article>,
		<article>
			Its launch triggered the space race between the United States and
			the Soviet Union. Sputnik 1 enabled important advancements in
			understanding space.
		</article>,
		<article>
			The space race led to notable space achievements such as the first
			human spaceflight by Yuri Gagarin in 1961.
		</article>,
		<article>
			Sputnik 1 is considered a significant event of the Cold War.
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

	const transitions = useTransition(messageId, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	})

	return transitions((style, index) => {
		return (
			<animated.div className="popup" style={style}>
				{messages[index]}
			</animated.div>
		)
	})
}
