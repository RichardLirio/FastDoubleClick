import { api } from "@/data/api";
import { Click, columns } from "./columns";
import { DataTable } from "./data-table";

export default async function Ranking() {
  const data = await api("/clicks", {
    cache: "no-store",
  });
  const clicks: { Clicks: Click[] } = await data.json();

  return (
    <div className="flex items-center justify-center  py-10">
      <div className="flex items-center py-4 gap-3">
        <DataTable columns={columns} data={clicks.Clicks} />
      </div>
    </div>
  );
}
