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
          <ul className="dropdownTop">
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
          </ul>
          <ul className="dropdownCenter">
            <li>
              <Link href={"/"}>Settings</Link>
            </li>
            <li>
              <Link href={"/"}>Refine recommendations</Link>
            </li>
            <li>
              <Link href={"/"}>Manage publications</Link>
            </li>
            <li>
              <Link href={"/"}>Help</Link>
            </li>
          </ul>
          <ul>
            <li>
              <form action={signOut}>
                <button className="signoutBtn">Sign out</button>
              </form>
            </li>
            <li>{user?.email} </li>
          </ul>
        </div>
      )}
    </>
  );
}
