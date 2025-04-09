"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "sonner";
import { deploy } from "@/app/util/actions"; // Import the deploy function

export function CardWithForm() {

	// Function to handle the deploy button click
	const handleDeployClick = async () => {	
		try {
			await deploy(); // Call the deploy function
			console.log('client deploy function called');
		} catch (error) {
			console.error("Error during deployment:", error);
		}
	}


	return (
		<Card className="w-[350px]">
			<Toaster position="top-center" toastOptions={{ duration: 2000 }} />
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Name</Label>
							<Input id="name" placeholder="Name of your project" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="description">Description</Label>
							<Input id="description" placeholder="Description one liner" />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button onClick={handleDeployClick}>Deploy</Button>
			</CardFooter>
		</Card>
	);
}
