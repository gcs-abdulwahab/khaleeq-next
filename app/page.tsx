import TeamComp from "./components/TeamComp";
import { fetchTeams } from "./util/api";

export default async function Home() {
	const teams = await fetchTeams();

	return (
		<div className="flex flex-wrap justify-center gap-8 w-full">
			{teams.map((team, index) => (
				<div key={index} className="w-full ">
					<h1 className="text-center text-3xl font-bold my-4">{team.name}</h1>
					<TeamComp {...team} />
				</div>
			))}
		</div>
	);
}
