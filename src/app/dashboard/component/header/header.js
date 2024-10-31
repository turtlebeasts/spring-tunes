"use client";
export default function Header() {
  return (
    <nav className="w-full shadow-xl h-16">
      <div className="flex justify-between items-center px-10 py-4">
        <h1 className="font-semibold">DASHBOARD</h1>
        <button className="rounded bg-red-900 text-white py-2 px-6 text-xs shadow hover:shadow-md hover:bg-red-700 transition">
          LOGOUT
        </button>
      </div>
    </nav>
  );
}
