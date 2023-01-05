import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Navbar } from "./Navbar";
import BlogTitle from "./BlogTitle";
import { Header } from "@api";
import { usePathname } from "next/navigation";
import { SearchTrigger } from "./Search";
import clsx from "clsx";

interface SmallScreenNavProps {
  header?: Header | null;
  isAboutInfoAvailable: boolean;
}

const SmallScreenNav = ({
  header,
  isAboutInfoAvailable,
}: SmallScreenNavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  const handleNavBarVisibility = async () => {
    if (!isNavOpen) {
      setIsNavOpen(true);
      setShowContent(true);
    } else {
      setShowContent(false);
      setTimeout(() => setIsNavOpen(false), 700);
    }
  };

  const renderTopBar = useCallback(() => {
    const Component = isNavOpen ? XMarkIcon : Bars3Icon;
    return (
      <div className="flex justify-between">
        {header ? <BlogTitle header={header} /> : <div />}
        <Component
          className="mt-5 h-10 w-10 cursor-pointer text-primary-300"
          onClick={handleNavBarVisibility}
        />
      </div>
    );
  }, [header, isNavOpen, handleNavBarVisibility]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {renderTopBar()}
        <SearchTrigger />
      </div>
      <div>
        <div
          className={clsx(
            "absolute top-0 left-0 z-50 h-screen  w-full bg-background-dark p-8",
            !isNavOpen && "hidden"
          )}
        >
          {renderTopBar()}
          <Transition
            show={showContent}
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all ease-out duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-10 ml-4">
              <Navbar isAboutInfoAvailable={isAboutInfoAvailable} />
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default SmallScreenNav;
