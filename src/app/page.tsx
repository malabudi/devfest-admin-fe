export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-64">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-6xl">MI DevFest Admin</h1>
        <form className="flex flex-col">
          <label>Username*</label>
          <input className="w-96 mb-5 border border-solid border-gray-200 rounded py-1 pl-2" id="username" name="username"></input>
          <label>Password*</label>
          <input className="w-96 mb-12 border border-solid border-gray-200 rounded py-1 pl-2" id="password" name="password"></input>
          <button className="bg-green-500 text-white w-96 rounded py-1" type="submit">Log In</button>
        </form>
      </main>
    </div>
  );
}
