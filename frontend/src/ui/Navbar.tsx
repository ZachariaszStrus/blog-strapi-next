import * as React from "react";
import {Link, modalState} from "@ui";
import { routes } from "@utils";
import { FC } from "react";
import Search from "./SearchComponent";
import Modal from "./Modal";
import SearchTrigger from "./SearchTrigger";
import {useAtom} from "jotai";

interface NavbarProps {
  isAboutInfoAvailable: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isAboutInfoAvailable }) => {
    const [showModal, setShowModal]=useAtom(modalState);
  return (
    <div>
      <div className="flex flex-col items-start gap-4">
        <Link href={routes.home()}>home</Link>
        {isAboutInfoAvailable && <Link href={routes.about()}>about</Link>}
        <div className={"hidden lg:block"}>
            <SearchTrigger />
        </div>
      </div>
      <div className={"hidden lg:block"}>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Search />
        </Modal>
      </div>
    </div>
  );
};
