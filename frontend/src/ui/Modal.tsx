import { Transition } from "@headlessui/react";
import React, { FC, ReactNode } from "react";
import { atom, useAtom } from "jotai";

export const modalState = atom(false);

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const [showModal, setShowModal] = useAtom(modalState);
  return (
    <div className={`relative z-50 ${!showModal && "hidden"}`}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="mt-20 flex min-h-full items-start justify-center p-4 p-0 text-center"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setShowModal(false);
          }}
        >
          <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
            <Transition
              show={showModal}
              enter="transition-opacity duration-500"
              enterFrom="opacity-90"
              enterTo="opacity-100"
            >
              <div
                className="bg-background-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                {children}
                <div className="sm:flex sm:items-start"></div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
