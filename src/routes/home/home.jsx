import Experience from "../../components/experience/experience"
import Content from "../../components/content/content"
import data from "../../data/content.json"

export default function Home() {
	return (
		<div>
			<Content>
				<h1>
					<span>Welcome to,</span>
					<br />
					{data.title}
				</h1>
			</Content>
			<Experience />
		</div>
	)
}
