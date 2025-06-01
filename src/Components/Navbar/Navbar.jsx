import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between p-2">
      <div className="logo text-4xl font-bold pl-3">SavePass</div>
      <ul className="flex gap-3 items-center">
        <li
          href="/"
          className="hover:text-pink-600 hover:cursor-pointer flex items-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jeuxydnh.json"
            trigger="hover"
            colors="primary:#121331,secondary:#c7166f"
            className="h-6 flex"
          ></lord-icon>
          Home
        </li>
        <li
          href="/login"
          className="hover:text-pink-600 hover:cursor-pointer flex items-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/kdduutaw.json"
            trigger="hover"
            colors="primary:#121331,secondary:#c7166f"
            className="h-6"
          ></lord-icon>
          Login
        </li>
        <li className="hover:text-pink-600 hover:cursor-pointer flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="hover"
            colors="primary:#121331,secondary:#c7166f"
            className="h-6"
          ></lord-icon>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
