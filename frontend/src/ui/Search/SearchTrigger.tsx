import React from "react";
import Input from "./Input";
import { useAtom } from "jotai";
import { displaySearchState } from "./state";

export const SearchTrigger = () => {
  const [, setShowModal] = useAtom(displaySearchState);
  return <Input onClick={() => setShowModal(true)} readOnly />;
};
