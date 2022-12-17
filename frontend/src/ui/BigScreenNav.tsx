import React from "react";
import { Header } from "@api";
import BlogTitle from "./BlogTitle";
import { Navbar } from "./Navbar";
import {
  SocialMediaComponent,
  SocialMediaComponentProps,
} from "./SocialMediaComponent";

interface BigScreenNavProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
  socialMediaItems?: SocialMediaComponentProps["items"] | null;
}

const BigScreenNav = ({
  header,
  isAboutInfoAvailable,
  socialMediaItems,
}: BigScreenNavProps) => {
  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between pt-8 pb-24">
      <div className="flex flex-col gap-8">
        {header && <BlogTitle header={header} />}{" "}
        <Navbar isAboutInfoAvailable={isAboutInfoAvailable} />
      </div>
      <SocialMediaComponent items={socialMediaItems} />
    </div>
  );
};

export default BigScreenNav;
