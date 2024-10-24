'use client';

import Table from "@/components/Table";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5000/sponsors').then((res) =>
        res.json(),
      ),
  })

  const editRow = () => {
    // Row editing logic here
    console.log("Edit row.");
  }

  console.log("etste", data)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-64">
      <h1 className="text-center text-4xl">Sponsors Table</h1>
      <Table rows={data ? data

        : []} columns={["Name", "Description", "Year", "URL"]} deleteRow={editRow} editRow={editRow} />

    </div>
  );
}