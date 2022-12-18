import { PropsWithChildren } from "react";
import { ComponentSharedSocialMediaItem, Header } from "@api";
import SmallScreenNav from "./SmallScreenNav";
import BigScreenNav from "./BigScreenNav";

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
      <div className="flex max-w-6xl flex-1 flex-col lg:flex-row">
        <div className="pb=4 w-full px-8 pt-8 lg:hidden">
          <SmallScreenNav
            header={header}
            isAboutInfoAvailable={isAboutInfoAvailable}
            socialMediaItems={socialMediaItems}
          />
        </div>
        <div className="flex flex-1 gap-x-8 lg:px-8">
          <div className="flex hidden w-60 lg:block">
            <BigScreenNav
              header={header}
              isAboutInfoAvailable={isAboutInfoAvailable}
              socialMediaItems={socialMediaItems}
            />
          </div>
          <main className="flex flex-1 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
};
