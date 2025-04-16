import { Link, useLocation } from "react-router-dom";
import { links } from "../assets/data";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="shadow-xl z-[999] bg-white p-4 sticky top-0 w-full">
      <div className="container space-between md:flex-nowrap flex-wrap">
        <Link
          to="/"
          className="logo duration-300 hover:text-orange-500 center-y gap-x-2 text-[36px] font-bold text-[#333]"
        >
          <img src="./logo.png" alt="Pizza Logo" className="w-[70px]" />
          Pizza.
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="main-button md:hidden block"
        >
          <FaBars size={20} />
        </button>
        <ul
          className={`w-full md:flex-row flex-col md:w-fit md:flex gap-6 ${
            open ? "flex" : "hidden"
          }`}
        >
          {links.map((link) => (
            <li key={link.name}>
              <a
                className={`${
                  pathname === link.href && "text-orange-500"
                } text-[18px] font-[500] block hover:text-orange-500 duration-300`}
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
