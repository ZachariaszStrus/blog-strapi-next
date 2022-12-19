import * as React from "react";
import { Link, modalState } from "@ui";
import { routes } from "@utils";
import { FC } from "react";
import { useAtom } from "jotai";
import Search from "./SearchComponent";
import Modal from "./Modal";

interface NavbarProps {
  isAboutInfoAvailable: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isAboutInfoAvailable }) => {
  const [, setShowModal] = useAtom(modalState);
  return (
    <div>
      <div className="flex flex-col items-start gap-4">
        <Link href={routes.home()}>home</Link>
        {isAboutInfoAvailable && <Link href={routes.about()}>about</Link>}
        <Search handleClick={() => setShowModal(true)} readOnly />
      </div>
      <Modal>
        <Search />
      </Modal>
    </div>
  );
};
