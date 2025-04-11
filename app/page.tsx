import ContactCard from "@/app/components/ContactCard";

type ContactCard = {
	name: string;
	email: string;
};

// create contact of contactCard type
const contactCard: ContactCard = {
	name: "Rushikesh",
	email: "ZpF2a@example.com",
};

export default async function Home() {
	// const teams = await fetchTeams();

	return (
		<div className="flex flex-wrap justify-center gap-8 w-full">
			<ContactCard contact-card={contactCard} />

			{/* {teams.map((team, index) => (
				<div key={index} className="w-full ">
					<h1 className="text-center text-3xl font-bold my-4">{team.name}</h1>
					<TeamComp {...team} />
				</div>
			))} */}
		</div>
	);
}
