import { Payment } from "@/app/types";
import { columns } from "./payments/columns";
import { DataTable } from "./payments/data-table";
export const payments: Payment[] = [
	{
		id: "728ed52f",
		amount: 100,
		status: "pending",
		email: "m@example.com",
	},
	{
		id: "489e1d42",
		amount: 125,
		status: "processing",
		email: "example@gmail.com",
	},
	{
		id: "12345678",
		amount: 200,
		status: "pending",
		email: "user@example.com",
	},
	// ...
	{
		id: "abcdef12",
		amount: 150,
		status: "failed",
		email: "fail@example.com",
	},
];

export default async function Home() {
	console.log(columns.entries);

	return (
		<div className="flex flex-wrap justify-center gap-8 w-full bg-green-200 p-4">
			<DataTable columns={columns} data={payments} />
		</div>
	);
}
