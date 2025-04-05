import { useEffect, useState } from "react";

export function useCheckboxState(fetchUrl: string, updateUrl: string) {
	const [isChecked, setIsChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(true); // Optional: To handle loading state
	const [error, setError] = useState<string | null>(null); // Optional: To handle errors

	// Fetch the initial state from the server
	useEffect(() => {
		const fetchCheckboxState = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(fetchUrl, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error("Failed to fetch checkbox state from the server");
				}

				const data = await response.json();
				setIsChecked(data.isChecked); // Set the initial state from the server
				setError(null); // Clear any previous errors
			} catch (err) {
				console.error("Error fetching checkbox state:", err);
				setError("Failed to fetch checkbox state");
			} finally {
				setIsLoading(false);
			}
		};

		fetchCheckboxState();
	}, [fetchUrl]);

	// Function to update the state on the server
	const updateCheckboxState = async (newState: boolean) => {
		setIsChecked(newState); // Optimistically update the state

		try {
			const response = await fetch(updateUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ isChecked: newState }),
			});

			if (!response.ok) {
				throw new Error("Failed to update state on the server");
			}

			setError(null); // Clear any previous errors
		} catch (err) {
			console.error("Error updating state on the server:", err);
			setError("Failed to update checkbox state");
			setIsChecked(!newState); // Revert state if the update fails
		}
	};

	return { isChecked, isLoading, error, updateCheckboxState };
}
