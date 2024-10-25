'use client';

import Table from "@/components/Table";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';

export default function Home() {
    const [columns, setColumns] = useState<string[]>(["Name", "LinkedIn", "GitHub", "Avatar", "Bio", "University"]);
    const [rows, setRows] = useState<any[]>([
      { name: "John Doe", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" },
      { name: "John Bruh", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" },
      { name: "Dane Bruh", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" }
    ]);

    const editRow = (index: number, updatedRow: any) => {
      const newRows = [...rows];
      newRows[index] = updatedRow;
      setRows(newRows);
    };

    const deleteRow = (index: number) => {
      setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-64">
          <h1 className="text-center text-4xl">Organizers Table</h1>
          <Table rows={rows} columns={columns} editRow={editRow} deleteRow={deleteRow} />
          <Toaster position="bottom-right" />
      </div>
    );
  }