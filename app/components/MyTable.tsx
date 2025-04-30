import data from "@/app/data/data.json";
import { DataTable } from "@/components/data-table";

const MyTable = () => {
	return (
		<div>
		
			<DataTable data={data} />
		</div>
	);
};

export default MyTable;
