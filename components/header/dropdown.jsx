"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderProfile from "./headerProfile";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.matches(".dropbtn")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropbtn">
        Dropdown
      </button>
      <div
        id="myDropdown"
        className={`dropdown-content ${isOpen ? "show" : ""}`}
      >
        <Link>Profile</Link>
        <Link>Library</Link>
        <Link>Stories</Link>
        <Link>Stats</Link>
        <HeaderProfile />
      </div>
    </div>
  );
}
