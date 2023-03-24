import { useTransition, animated } from "react-spring"

export default function Text({ children }) {
	const [isVisible, setIsVisible] = useState(false)
	const transition = useTransition(isVisible, {
		from: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
		},
		leave: { opacity: 0 },
	})

	return (
		<>{transition((style, item) => (item ? <div>{children}</div> : ""))}</>
	)
}
