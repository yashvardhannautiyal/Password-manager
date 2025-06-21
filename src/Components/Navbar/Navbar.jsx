import React from "react";

function Navbar() {
  return (
    <nav className="sm:flex justify-between p-2">
      <div className="logo sm:text-4xl text-2xl font-bold sm:pl-3 flex justify-center">SavePass</div>
      <ul className="flex justify-center mt-5 sm:mt-0 sm:gap-3 gap-2 items-center">
        <li
          href="/"
          className="hover:text-pink-600 hover:cursor-pointer flex items-center"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jeuxydnh.json"
            trigger="hover"
            colors="primary:#121331,secondary:#c7166f"
            className="sm:h-6 h-4"
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
            className="sm:h-6 h-4"
          ></lord-icon>
          Login
        </li>
        <li className="hover:text-pink-600 hover:cursor-pointer flex items-center">
          <a href="https://github.com/yashvardhannautiyal/Password-manager" target="_blank">
          <lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="hover"
            colors="primary:#121331,secondary:#c7166f"
            className="sm:h-6 h-5"
          ></lord-icon></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
