export const fetchInitialCheckboxState = async () => {
    const response = await fetch("/api/checkbox-state", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch checkbox state from the server");
    }

    const data = await response.json();
    return data.isChecked; // Assuming the server returns { isChecked: true/false }
};

export const updateCheckboxStateOnServer = async (isChecked: boolean) => {
    const response = await fetch("/api/checkbox-state", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ isChecked }),
    });

    if (!response.ok) {
        throw new Error("Failed to update checkbox state on the server");
    }
};