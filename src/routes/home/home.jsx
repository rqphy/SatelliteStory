import Experience from "../../components/experience/experience"
import data from "../../data/content.json"
import Popup from "../../components/popup/popup"

export default function Home() {
	return (
		<div>
			<Popup />
			<Experience />
		</div>
	)
}
