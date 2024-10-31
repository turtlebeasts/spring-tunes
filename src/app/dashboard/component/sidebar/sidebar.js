"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-indigo-950 text-white w-64 h-full px-2 fixed top-0 left-0">
      <h2 className="text-xl font-bold text-center p-4">
        SRING<span className="font-light">ADMIN</span>
        <span className="font-bold text-green-500">•</span>
      </h2>
      <ul className="text-sm font-normal">
        <li className="py-4 px-4 hover:bg-indigo-900 rounded">
          <Link href="/dashboard">
            <h1 className="hover:underline font-semibold">
              <i className="fa-solid fa-table-columns mr-4"></i> DASHBOARD
            </h1>
          </Link>
        </li>
        <hr />
        <li className="py-2 px-4">
          <p className="text-gray-500 text-xs">MANAGE</p>
        </li>
        <li
          className={`py-2 px-4 rounded transition-all duration-300 ${
            pathName === "/dashboard/artists" ? "bg-violet-700" : ""
          }`}
        >
          <Link href="/dashboard/artists">
            <h1 className="hover:underline">
              <i className="fa-solid fa-user mr-4"></i> Artist & Profile
            </h1>
          </Link>
        </li>
        <li
          className={`py-2 px-4 rounded transition-all duration-300 ${
            pathName === "/dashboard/videos" ? "bg-violet-700" : ""
          }`}
        >
          <Link href="/dashboard/videos">
            <h1 className="hover:underline">
              <i className="fa-solid fa-video mr-4"></i>Videos
            </h1>
          </Link>
        </li>
        <li
          className={`py-2 px-4 rounded transition-all duration-300 ${
            pathName === "/dashboard/news" ? "bg-violet-700" : ""
          }`}
        >
          <Link href="/dashboard/news">
            <h1 className="hover:underline">
              <i className="fa-solid fa-newspaper mr-4"></i>News & Updates
            </h1>
          </Link>
        </li>
        <li
          className={`py-2 px-4 rounded transition-all duration-300 ${
            pathName === "/dashboard/banners" ? "bg-violet-700" : ""
          }`}
        >
          <Link href="/dashboard/banners">
            <h1 className="hover:underline">
              <i className="fa-solid fa-images mr-4"></i>Banners & Photos
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
