"use client";

import { useCheckboxState } from "@/app/hooks/useCheckboxState";
import { Checkbox } from "@/components/ui/checkbox";
import { toast, Toaster } from "sonner";

export function CheckboxWithText() {
	const { isChecked, isLoading, error, updateCheckboxState } = useCheckboxState(
		"/api/checkbox-state", // Replace with your actual API endpoint
		"/api/checkbox-state" // Replace with your actual API endpoint
	);

	// Function to handle checkbox change
	const handleCheckboxChange = async () => {
		const newState = !isChecked;

		// Show the toast
		toast(newState ? "Checkbox checked!" : "Checkbox unchecked!", {
			id: "checkbox-toast",
			style: {
				backgroundColor: newState ? "green" : "red",
				color: "white",
			},
		});

		// Update the state on the server
		updateCheckboxState(newState);
	};

	return (
		<div id="profile-box" className="absolute bottom-2 left-2 flex space-x-2">
			<Toaster position="top-center" toastOptions={{ duration: 2000 }} />
			{isLoading ? (
				<p>Loading...</p> // Optional: Show a loading indicator
			) : (
				<Checkbox
					id="terms1"
					checked={isChecked}
					onCheckedChange={handleCheckboxChange}
				/>
			)}
			{error && <p className="text-red-500">{error}</p>}{" "}
			{/* Optional: Show error message */}
			<div className="grid gap-1.5 leading-none">
				<label
					htmlFor="terms1"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Accept
				</label>
			</div>
		</div>
	);
}
