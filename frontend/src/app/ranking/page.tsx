import { api } from "@/data/api";
import { Click, columns } from "./columns";
import { DataTable } from "./data-table";

let data = await api("/clicks", {
  next: {
    revalidate: 60,
  },
});
let clicks: { Clicks: Click[] } = await data.json();
console.log("🚀 ~ clicks:", clicks);

export default async function Ranking() {
  return (
    <div className="flex items-center justify-center  py-10">
      <div className="flex items-center py-4 gap-3">
        <DataTable columns={columns} data={clicks.Clicks} />
      </div>
    </div>
  );
}
