"use server";

export async function deploy() {
	console.log("deploying...");
	// Simulate a deployment process
	await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
	console.log("Deployment started!");
}
