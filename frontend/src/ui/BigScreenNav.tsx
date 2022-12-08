import React from "react";
import { Header } from "@api";
import BlogTitle from "./BlogTitle";
import { Navbar } from "./Navbar";

interface BigScreenNavProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
}

const BigScreenNav = ({ header, isAboutInfoAvailable }: BigScreenNavProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-8">{header && <BlogTitle header={header} />}</div>
      <Navbar isAboutInfoAvailable={isAboutInfoAvailable} />
    </div>
  );
};

export default BigScreenNav;
