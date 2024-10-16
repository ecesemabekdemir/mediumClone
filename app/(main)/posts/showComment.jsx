"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function ShowComment() {
  const [show, setShow] = useState(false);

  const showSidenav = () => {
    setShow(!show);
  };

  return (
    <>
      <button onClick={showSidenav}>yorum</button>
      {show && ss}
    </>
  );
}
