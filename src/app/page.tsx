"use client"; // Indicates that this is a client component

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  // Explicitly define the type of 'e'
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // Check hardcoded credentials
    if (username === hardcodedUsername && password === hardcodedPassword) {
      console.log(true);  // Log true if credentials are valid
      setError('');       // Clear any previous error

    } else {
      console.log(false); // Log false if credentials are invalid
      setError('Invalid username or password'); // Display an error if credentials don't match
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-64">
      <main className="flex flex-col gap-8 items-center">
        <h1 className="text-center text-6xl">MI DevFest Admin</h1>

        {/* Login form */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Username*</label>
          <input
            className="w-96 mb-5 border border-solid border-gray-200 rounded py-1 pl-2"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></input>
          <label>Password*</label>
          <input
            type="password" // Set type as password to hide input characters
            className="w-96 mb-12 border border-solid border-gray-200 rounded py-1 pl-2"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>

          {/* Error message if credentials are wrong */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Next.js Link wrapping the button */}
          {!error && username === hardcodedUsername && password === hardcodedPassword ? (
            <Link href="/select-year">
              <button className="bg-green-500 text-white w-96 rounded py-1">
                Log In
              </button>
            </Link>
          ) : (
            <button className="bg-green-500 text-white w-96 rounded py-1" type="submit">
              Log In
            </button>
          )}
        </form>
      </main>
    </div>
  );
}
