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
    <div className="flex w-full relative justify-center">
      <div className="flex flex-1 max-w-6xl p-8 flex-col lg:flex-row">
        <div className="w-full lg:hidden mb-8">
          <SmallScreenNav
            header={header}
            isAboutInfoAvailable={isAboutInfoAvailable}
          />
        </div>
        <div className="flex flex-1 gap-x-8">
          <div className="flex flex-1 hidden lg:block max-w-xs">
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
