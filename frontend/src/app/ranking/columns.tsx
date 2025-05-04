"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Click = {
  id: string;
  timestamp: string;
  name: string;
  timeBetweenClicks: number;
};

export const columns: ColumnDef<Click>[] = [
  {
    id: "position",
    header: "Posição",
    cell: ({ row, table }) => {
      const page = (table.options.state.pagination?.pageIndex ?? 0) + 1;
      const limit = table.options.state.pagination?.pageSize ?? 10;
      const index = row.index;
      return (page - 1) * limit + index + 1;
    },
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "timeBetweenClicks",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tempo (ms)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: "Data/Hora",
  },
];
