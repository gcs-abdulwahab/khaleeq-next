interface TeamProps {
	name: string;
	members: Member[];
}

// Define types for the component props
interface Member {
	name: string;
	role: string;
	imageUrl: string;
}

export interface Team {
	name: string;
	members: Member[];
}

type ProfileType = {
	top: string;
};

type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};


export type { Member, Team, TeamProps , ProfileType , Payment};
