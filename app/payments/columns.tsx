"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		header: "ID",
		accessorKey: "id",
		enableSorting: true,
	},
	{
		header: "Amount",
		accessorKey: "amount",
		enableSorting: true,
		cell: ({ row }) => {
			const amount = row.getValue("amount") as number;
			return <span>${amount}</span>; // Formatted display
		},
	},
	{
		header: "Status",
		accessorKey: "status",
		enableSorting: true,
		cell: ({ row }) => {
			const status = row.getValue("status") as Payment["status"];
			const statusColor = {
				pending: "text-yellow-500",
				processing: "text-blue-500",
				success: "text-green-500",
				failed: "text-red-500",
			}[status];

			return <span className={statusColor}>{status}</span>;
		},
	},
	{
		header: "Email",
		accessorKey: "email",
		enableSorting: true,
	},
	{
		header: "Actions",
		id: "actions",
		cell: ({ row }) => {
			return <button onClick={() => alert(row.original.id)}>View</button>;
		},
	}
];
