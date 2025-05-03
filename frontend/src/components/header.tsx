import Link from "next/link";
import React from "react";
import { ModeToggle } from "./button-dark-mode";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

function Header() {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-5">
        {/* Logo */}
        <Link href="/" className="text-lg font-extrabold">
          FastDoubleClick
        </Link>
      </div>
      {/* MENU DE NAVEGAÇÃO */}
      <div className="flex items-center justify-between p-2 gap-6 w-[300px]">
        <NavigationMenu className="flex items-center justify-between p-2 gap-6 w-[300px]">
          <Link href="/" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HOME
            </NavigationMenuLink>
          </Link>
          <Link href="/play" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              PLAY
            </NavigationMenuLink>
          </Link>
          <Link href="/ranking" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              RANKING
            </NavigationMenuLink>
          </Link>
        </NavigationMenu>
      </div>
      <div className="flex items-center justify-between gap-3 p-2">
        <ModeToggle />
        <div>contato</div>
      </div>
    </div>
  );
}

export default Header;
