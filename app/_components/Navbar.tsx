import React from "react";
import { ThemeChanger } from "./ThemeChanger";
import Link from "next/link";

function Navbar() {
  return (
    <nav className=" py-5 bg-background mb-10 px-5 lg:px-0 shadow-xl">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/">
          <h4 className="text-xl uppercase font-bold">Football Mastery</h4>
        </Link>
        <div>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
