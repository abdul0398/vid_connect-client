"use client";
import { usePathname } from "next/navigation";
import LinkBtn from "./LinkBtn";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full p-3 h-14 border flex">
      <div className="w-1/4">
        <LinkBtn
          className={`${
            pathname == "/" ? "bg-black text-white border-none" : ""
          }`}
          href="/"
        >
          Home
        </LinkBtn>
      </div>
      <ul className="flex gap-2 w-3/4 justify-center">
        <li>
          <LinkBtn
            className={`${
              pathname == "/dashboard" ? "bg-black text-white border-none" : ""
            }`}
            href="/dashboard"
          >
            Dashboard
          </LinkBtn>
        </li>
        <li>
          <LinkBtn
            className={`${
              pathname == "/dashboard/profile"
                ? "bg-black text-white border-none"
                : ""
            }`}
            href="/dashboard/profile"
          >
            {" "}
            Profile
          </LinkBtn>
        </li>
        <li>
          <LinkBtn
            className={`${
              pathname == "/dashboard/todo"
                ? "bg-black text-white border-none"
                : ""
            }`}
            href="/dashboard/todo"
          >
            Todo
          </LinkBtn>
        </li>
      </ul>
    </nav>
  );
}
