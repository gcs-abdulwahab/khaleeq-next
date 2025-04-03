import TeamComp from "./components/TeamComp";
import { Team } from "./types/types";
async function fetchTeams(): Promise<Team[]> {
	const res = await fetch(
		"https://api.jsonbin.io/v3/qs/67ee4e278a456b796681b6a3"
	);

	// Check if the response is successful
	if (!res.ok) {
		throw new Error("Failed to fetch team data");
	}

	const data = await res.json();

	// Access the 'record' array directly

	const teams: Team[] =
		data.record?.map((team: any) => ({
			name: team.teamName, // Map 'teamName' to 'name'
			members: team.members,
		})) || [];

	return teams;
}
// get the first team

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
