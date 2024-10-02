import Table from "@/components/Table";

export default function Home() {
    const columns = ["Name", "LinkedIn", "GitHub", "Avatar", "Bio", "University"];
    const rows = [
      { name: "John Doe", email: "john@gmail.com", linkedin: "linkedin.com/johndoe", github: "github.com/johndoe", avatar: "https://via.placeholder.com/150", bio: "I am a software engineer.", university: "University of Toronto" },
    ];

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-64">
          <h1 className="text-center text-4xl">Organizers Table</h1>
          <Table rows={rows} columns={columns}  />
      </div>
    );
  }