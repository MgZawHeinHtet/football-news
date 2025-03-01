import Link from "next/link";
import SaveItemsCounter from "./SaveItemsCounter";
import { ThemeChanger } from "./ThemeChanger";
import Modal from "./Modal";

function Navbar() {
  return (
    <nav className=" py-5 bg-background mb-10 px-5 lg:px-0 shadow-xl">
      <Modal/>
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link href="/">
          <h4 className="text-xl uppercase font-bold">Football Mastery</h4>
        </Link>
        <div className="flex items-center gap-3">
          <SaveItemsCounter />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
