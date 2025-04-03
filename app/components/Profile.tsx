import Image from "next/image";
// Define types for Profile component props

interface ProfileProps {
	name: string;
	role: string;
	imageUrl: string;
}
const Profile = ({ name, role, imageUrl }: ProfileProps) => {
	return (
		<div className="max-w-sm w-full bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105">
			<div className="relative pb-24">
				<Image
					src={imageUrl || "https://placehold.co/150x150.png"}
					alt={name}
					className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gray-200 rounded-full border-4 border-white"
					width={150}
					height={150}
				/>
			</div>
			<div className="px-6 pt-16 pb-6 text-center">
				<h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
				<p className="text-sm text-gray-500">{role}</p>
			</div>
			<div className="px-6 pb-6">
				<button className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
					Connect
				</button>
			</div>
		</div>
	);
};

export default Profile;
