import { api } from "@/data/api";
import { Click, columns } from "./columns";
import { DataTable } from "./data-table";

let data = await api("/clicks?page=1");
let clicks: { Clicks: Click[] } = await data.json();

export default async function Ranking() {
  return (
    <main className="overflow-hidden">
      <section className="relative">
        <div className="relative py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5 flex items-center justify-center">
              <div className="flex items-center py-4 gap-3">
                <DataTable columns={columns} data={clicks.Clicks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
