import React from "react";
import { Header } from "@api";
import BlogTitle from "./BlogTitle";
import { Navbar } from "./Navbar";

interface BigScreenNavProps {
  header?: Header | null;
}

const BigScreenNav = ({ header }: BigScreenNavProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-8">{header && <BlogTitle header={header} />}</div>
      <Navbar />
    </div>
  );
};

export default BigScreenNav;
