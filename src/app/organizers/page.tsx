'use client';

import Table from "@/components/Table";
import { useState } from "react";

export default function Home() {
    const [columns, setColumns] = useState<string[]>(["Name", "LinkedIn", "GitHub", "Avatar", "Bio", "University"]);
    const [rows, setRows] = useState<any[]>([
      { name: "John Doe", email: "john@gmail.com", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" },
      { name: "John Bruh", email: "john@gmail.com", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" },
      { name: "Dane Bruh", email: "john@gmail.com", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" }
    ]);

    const editRow = () => {
      // Row editing logic here
      console.log("Edit row.");
    }

    const deleteRow = (index: number) => {
      setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-64">
          <h1 className="text-center text-4xl">Organizers Table</h1>
          <Table rows={rows} columns={columns} editRow={editRow} deleteRow={deleteRow} />
      </div>
    );
  }