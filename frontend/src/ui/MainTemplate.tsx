import { PropsWithChildren } from "react";
import { Header } from "@api";
import SmallScreenNav from "./SmallScreenNav";
import BigScreenNav from "./BigScreenNav";
import { Search } from "./Search";
import * as React from "react";

interface MainTemplateProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
}

export const MainTemplate = ({
  children,
  header,
  isAboutInfoAvailable,
}: PropsWithChildren<MainTemplateProps>) => {
  return (
    <div className="relative flex w-full justify-center">
      <div className="flex max-w-6xl flex-1 flex-col py-8 lg:px-8">
        <div className="mb-8 w-full px-6 md:px-8 lg:hidden">
          <SmallScreenNav
            header={header}
            isAboutInfoAvailable={isAboutInfoAvailable}
          />
        </div>
        <div className="flex flex-1">
          <div className="flex hidden max-w-xs flex-1 pr-16 lg:block">
            <BigScreenNav
              header={header}
              isAboutInfoAvailable={isAboutInfoAvailable}
            />
          </div>
          <main className="flex flex-1">{children}</main>
        </div>
      </div>
      <Search />
    </div>
  );
};
