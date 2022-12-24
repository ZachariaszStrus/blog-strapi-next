import React from "react";
import Input from "./Input";
import { useAtom } from "jotai";
import { modalState } from "./Modal";
import { searchedWordState } from "./SearchComponent/state";

const SearchTrigger = () => {
  const [, setShowModal] = useAtom(modalState);
  const [searchedWord] = useAtom(searchedWordState);
  return (
    <Input
      onClick={() => setShowModal(true)}
      readOnly
      defaultValue={searchedWord}
    />
  );
};

export default SearchTrigger;
