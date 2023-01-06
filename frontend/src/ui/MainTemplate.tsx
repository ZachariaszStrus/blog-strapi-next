import { PropsWithChildren } from "react";
import { ComponentSharedSocialMediaItem, Header } from "@api";
import SmallScreenNav from "./SmallScreenNav";
import BigScreenNav from "./BigScreenNav";
import { Search } from "./Search";
import * as React from "react";

interface MainTemplateProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
  socialMediaItems?: Pick<
    ComponentSharedSocialMediaItem,
    "title" | "icon" | "url"
  >[];
}

export const MainTemplate = ({
  children,
  header,
  isAboutInfoAvailable,
  socialMediaItems,
}: PropsWithChildren<MainTemplateProps>) => {
  return (
    <div className="relative flex w-full justify-center">
      <div className="flex max-w-6xl flex-1 flex-col lg:px-8">
        <div className="pb=4 w-full px-6 pt-8 md:px-8 lg:hidden">
          <SmallScreenNav
            header={header}
            isAboutInfoAvailable={isAboutInfoAvailable}
            socialMediaItems={socialMediaItems}
          />
        </div>
        <div className="flex flex-1">
          <div className="flex hidden max-w-xs flex-1 pr-16 lg:block">
            <BigScreenNav
              header={header}
              isAboutInfoAvailable={isAboutInfoAvailable}
              socialMediaItems={socialMediaItems}
            />
          </div>
          <main className="flex flex-1 py-8">{children}</main>
        </div>
      </div>
      <Search />
    </div>
  );
};
