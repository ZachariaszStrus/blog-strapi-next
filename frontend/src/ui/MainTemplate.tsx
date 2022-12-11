import { PropsWithChildren } from "react";
import { Header } from "@api";
import SmallScreenNav from "./SmallScreenNav";
import BigScreenNav from "./BigScreenNav";

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
      <div className="flex max-w-6xl flex-1 flex-col p-8 lg:flex-row">
        <div className="mb-8 w-full lg:hidden">
          <SmallScreenNav
            header={header}
            isAboutInfoAvailable={isAboutInfoAvailable}
          />
        </div>
        <div className="flex flex-1 gap-x-8">
          <div className="flex hidden max-w-xs flex-1 lg:block">
            <BigScreenNav
              header={header}
              isAboutInfoAvailable={isAboutInfoAvailable}
            />
          </div>
          <main className="flex flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
};
