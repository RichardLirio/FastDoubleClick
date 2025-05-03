import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-5">
        {/* Logo */}
        <Link href="/" className="text-lg font-extrabold text-black">
          FastDoubleClick
        </Link>
      </div>
      {/* MENU DE NAVEGAÇÃO */}
      <div className="flex items-center justify-between p-2 gap-6 w-[300px]">
        <Link
          href="/"
          className="text-sm font-bold text-white bg-black flex items-center p-1 rounded"
        >
          HOME
        </Link>
        <Link
          href="/play"
          className="text-sm font-bold text-black  flex items-center p-1 rounded"
        >
          PLAY
        </Link>
        <Link
          href="/ranking"
          className="text-sm font-bold text-black flex items-center p-1 rounded"
        >
          RANKING
        </Link>
      </div>
      <div className="flex items-center justify-between gap-3 p-2">
        contato e butao darkmode
      </div>
    </div>
  );
}

export default Header;
