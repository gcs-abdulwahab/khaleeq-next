import { NextResponse } from "next/server";

let checkboxState = false; // Temporary in-memory storage (replace with a database in production)

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { isChecked } = body;

        // Validate the input
        if (typeof isChecked !== "boolean") {
            return NextResponse.json(
                { error: "Invalid input. 'isChecked' must be a boolean." },
                { status: 400 }
            );
        }

        // Update the state (replace this with a database update in production)
        checkboxState = isChecked;
        console.log("Checkbox state updated to:", checkboxState);

        // Respond with success
        return NextResponse.json({ message: "State updated successfully", isChecked });
    } catch (error) {
        console.error("Error updating state:", error);
        return NextResponse.json(
            { error: "Failed to update state on the server" },
            { status: 500 }
        );
    }
}

export async function GET() {
    // Return the current state (replace this with a database query in production)
    return NextResponse.json({ isChecked: checkboxState });
}