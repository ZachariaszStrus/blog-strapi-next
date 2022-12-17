import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Navbar } from "./Navbar";
import BlogTitle from "./BlogTitle";
import { Header } from "@api";
import { usePathname } from "next/navigation";
import {
  SocialMediaComponent,
  SocialMediaComponentProps,
} from "./SocialMediaComponent";

interface SmallScreenNavProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
  socialMediaItems?: SocialMediaComponentProps["items"] | null;
}

const SmallScreenNav = ({
  header,
  isAboutInfoAvailable,
  socialMediaItems,
}: SmallScreenNavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const renderTopBar = useCallback(() => {
    const Component = isNavOpen ? XMarkIcon : Bars3Icon;
    return (
      <div className="flex justify-between">
        {header ? <BlogTitle header={header} /> : <div />}
        <Component
          className="mt-5 h-10 w-10 cursor-pointer text-primary-300"
          onClick={() => setIsNavOpen((value) => !value)}
        />
      </div>
    );
  }, [header, isNavOpen]);

  return (
    <>
      {renderTopBar()}
      <div
        className={
          isNavOpen
            ? "fixed top-0 left-0 z-50 flex  h-screen w-full flex-col bg-background-dark p-8"
            : "hidden"
        }
      >
        {renderTopBar()}
        <Transition
          show={isNavOpen}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100 flex flex-col flex-1"
        >
          <div className="flex flex-1 flex-col  justify-between py-16 px-4">
            <Navbar isAboutInfoAvailable={isAboutInfoAvailable} />
            <SocialMediaComponent items={socialMediaItems} />
          </div>
        </Transition>
      </div>
    </>
  );
};

export default SmallScreenNav;
