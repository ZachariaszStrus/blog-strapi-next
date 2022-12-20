import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Navbar } from "./Navbar";
import BlogTitle from "./BlogTitle";
import { Header } from "@api";
import { usePathname } from "next/navigation";

interface SmallScreenNavProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
}

const SmallScreenNav = ({
  header,
  isAboutInfoAvailable,
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
      <div>
        <div
          className={
            isNavOpen
              ? "absolute top-0 left-0 z-50 h-screen w-full bg-background-dark py-8 px-6 md:px-8"
              : "hidden"
          }
        >
          {renderTopBar()}
          <Transition
            show={isNavOpen}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className={"mt-10 ml-4"}>
              <Navbar isAboutInfoAvailable={isAboutInfoAvailable} />
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default SmallScreenNav;
