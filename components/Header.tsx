"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBagOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

export const routes = [
  {
    id: "1",
    pathname: "/",
    name: "Products",
    icon: <IoBagOutline />,
  },
  {
    id: "2",
    pathname: "/favorites",
    name: "Favorites",
    icon: <MdFavoriteBorder />,
  },
];

function Header() {
  const currentPath = usePathname();

  return (
    <div className="fixed flex items-center justify-between w-full py-1 px-3 md:px-10 bg-gray-100 ">
      <h1 className="text-sm md:text-2xl font-semibold text-gray-600">
        Give All You Need
      </h1>
      <nav className="flex gap-5 md:gap-12">
        {routes.map((rout) => (
          <Link
            href={rout.pathname}
            key={rout.id}
            className={`text-xs md:text-lg hover:text-[#616161] ${
              currentPath === rout.pathname ? "font-bold border-b" : ""
            }`}
          >
            <div className="flex items-center gap-1 md:gap-2">
              <span className="text-xs md:text-lg text-gray-700">
                {rout.icon}
              </span>
              <span>{rout.name}</span>{" "}
            </div>
          </Link>
        ))}
      </nav>
      <img src="/logo.png" className="w-10 md:w-16 h-10 md:h-16" />
    </div>
  );
}

export default Header;
