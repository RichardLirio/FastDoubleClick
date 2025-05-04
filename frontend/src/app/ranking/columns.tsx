"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Click = {
  id: string;
  timestamp: string;
  name: string;
  timeBetweenClicks: number;
};

export const columns: ColumnDef<Click>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "timeBetweenClicks",
    header: "Tempo (ms)",
  },
  {
    accessorKey: "timestamp",
    header: "Data/Hora",
  },
];
