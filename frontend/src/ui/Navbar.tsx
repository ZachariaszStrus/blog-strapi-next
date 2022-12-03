import * as React from "react";
import { Link } from "ui";

export const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Link href="/">home</Link>
      <Link href="/">about</Link>
      <Link href="/">contact</Link>
    </div>
  );
};
