import { Member } from "../types";
import Profile from "./Profile";

interface TeamProps {
	name: string;
	members: Member[];
}
export default function TeamComp({ name, members }: TeamProps) {
	return (
		<div className="max-w-6xl mx-auto p-6">
			<h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
				{name}
			</h1>
			<div className="flex flex-wrap justify-center gap-8">
				{members.map((member, index) => (
					<div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
						<Profile {...member} />
					</div>
				))}
			</div>
		</div>
	);
}
