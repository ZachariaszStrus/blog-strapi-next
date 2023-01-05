import React, { FC, useCallback, useEffect, useState } from "react";
import { api, ArticleEntity } from "@api";
import { useDebounce } from "../utils";
import Spinner from "../Spinner";
import { SearchResults } from "./SearchResults";
import { useAtom } from "jotai";
import { displaySearchState, searchedWordState } from "./state";
import Input from "./Input";
import Modal from "../Modal";

interface SearchProps {
  handleClick?: () => void;
}

export const Search: FC<SearchProps> = () => {
  const [showModal, setShowModal] = useAtom(displaySearchState);
  const [searchedWord, setSearchedWord] = useAtom(searchedWordState);
  const [searchResults, setSearchResults] = useState<
    ArticleEntity[] | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const debouncedSearchWord = useDebounce(searchedWord, 500);

  const handleSearch = useCallback(async () => {
    const res = await api.searchArticles({ searchedWord: debouncedSearchWord });
    setSearchResults(res.search?.articles?.data);
    setLoading(false);
  }, [debouncedSearchWord]);

  useEffect(() => {
    if (debouncedSearchWord) {
      handleSearch();
    } else {
      setSearchResults(undefined);
      setLoading(false);
    }
  }, [debouncedSearchWord, handleSearch]);

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <div className="space-y-6">
        <Input
          defaultValue={searchedWord}
          onChange={(e) => {
            e.target.value !== "" && setLoading(true);
            setSearchedWord(e.target.value);
          }}
          autoFocus
        />
        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <SearchResults
            searchedWord={searchedWord}
            searchResults={searchResults}
          />
        )}
      </div>
    </Modal>
  );
};
