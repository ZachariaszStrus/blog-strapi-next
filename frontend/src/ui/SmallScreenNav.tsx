import React, { useCallback } from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Navbar } from "./Navbar";
import BlogTitle from "./BlogTitle";
import { Header } from "@api";
import { useRouter } from "next/router";

interface SmallScreenNavProps {
  header?: Header | null;
}

const SmallScreenNav = ({ header }: SmallScreenNavProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  router.events?.on("routeChangeComplete", () => setIsNavOpen(false));

  const renderTopBar = useCallback(() => {
    const Component = isNavOpen ? XMarkIcon : Bars3Icon;
    return (
      <div className="flex justify-between">
        {header ? <BlogTitle header={header} /> : <div />}
        <Component
          className="h-10 w-10 text-primary-300 cursor-pointer mt-5"
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
              ? "absolute w-full h-screen top-0 left-0  bg-background-dark p-8"
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
              <Navbar />
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default SmallScreenNav;
