'use client';

import Table from "@/components/Table";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const { isPending, error, data } = useQuery({
    queryKey: ['sponsorsData'],
    queryFn: () =>
      fetch('http://localhost:5000/sponsors').then((res) =>
        res.json(),
      ),
  })

  const editRow = () => {
    // Row editing logic here
    console.log("Edit row.");
  }


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-64">
      <h1 className="text-center text-4xl">Sponsors Table</h1>
      <Table rows={data ? data : []} columns={["Name", "Description", "Year", "URL"]} deleteRow={editRow} editRow={editRow} />
    </div>
  );
}