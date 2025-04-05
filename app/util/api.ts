import { Team } from "../types";

export async function fetchTeams(): Promise<Team[]> {
	const apiKey = process.env.NEXT_PUBLIC_API_MASTER_KEY;
	//const apiKey = "$2a$10$ebWQnbu5yPKRLRjrKlcMKemJqar.sfgnXa9VHBIZ/JmS8khMlUK3W";

	console.log(
		"API Key from .env.local:",
		process.env.NEXT_PUBLIC_API_MASTER_KEY
	);
	const res = await fetch(
		"https://api.jsonbin.io/v3/b/67efb4d28a456b7966825851",
		{
			headers: {
				"Content-Type": "application/json",
				"X-Master-Key": apiKey || "",
			},
		}
	);

	if (!res.ok) {
		throw new Error("Failed to fetch team data");
	}

	const data = await res.json();

	const teams: Team[] =
		data.record?.map((team: any) => ({
			name: team.teamName,
			members: team.members,
		})) || [];

	return teams;
}
