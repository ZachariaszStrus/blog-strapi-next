import * as React from "react";
import { Link } from "@ui";
import { routes } from "@utils";
import { FC } from "react";

interface NavbarProps {
  isAboutInfoAvailable: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isAboutInfoAvailable }) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Link href={routes.home()}>home</Link>
      {isAboutInfoAvailable && <Link href={routes.about()}>about</Link>}
      <Link href="/">contact</Link>
    </div>
  );
};
