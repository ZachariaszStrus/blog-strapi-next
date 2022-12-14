import * as React from "react";
import { Link } from "@ui";
import { routes } from "@utils";
import { FC } from "react";
import { SearchTrigger } from "./Search";

interface NavbarProps {
  isAboutInfoAvailable: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isAboutInfoAvailable }) => {
  return (
    <div>
      <div className="flex flex-col items-start gap-4">
        <Link href={routes.home()}>home</Link>
        {isAboutInfoAvailable && <Link href={routes.about()}>about</Link>}
      </div>
      <div className="mt-8 hidden w-full lg:block">
        <SearchTrigger />
      </div>
    </div>
  );
};
