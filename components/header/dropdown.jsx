"use client";

import Link from "next/link";
import { useState } from "react";
import "./header.css";
import { signOut } from "@/actions/auth";

export default function Dropdown({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleDropdown} className="dropbtn">
        {user?.email[0]}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link href={"/"}>Profile</Link>
            </li>
            <li>
              <Link href={"/"}>Library</Link>
            </li>
            <li>
              <Link href={"/"}>Stories</Link>
            </li>
            <li>
              <Link href={"/"}>Stats</Link>
            </li>
            <li>
              <form action={signOut}>
                <button>Çıkış Yap</button>
              </form>
            </li>
            <li>Hoşgeldin , {user?.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}
