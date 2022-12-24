import React, { FC, useCallback, useEffect, useState } from "react";
import { api, ArticleEntity } from "@api";
import { useDebounce } from "../utils";
import Spinner from "../Spinner";
import SearchResults from "./SearchResults";
import { useAtom } from "jotai";
import { searchedWordState } from "./state";
import Input from "../Input";

interface SearchProps {
  handleClick?: () => void;
  readOnly?: boolean;
}

const Search: FC<SearchProps> = ({ readOnly = false }) => {
  const [searchedWord, setSearchedWord] = useAtom(searchedWordState);
  const [searchResults, setSearchResults] = useState<
    ArticleEntity[] | undefined
  >(undefined);
  const [loading, setLoading] = useState(false);
  const debouncedSearchWord = useDebounce(searchedWord, 500);
  const handleSearch = useCallback(async () => {
    const res = await api.searchArticles({ searchedWord });
    setSearchResults(res.search?.articles?.data);
    setLoading(false);
  }, [searchedWord]);

  useEffect(() => {
    if (debouncedSearchWord) {
      handleSearch();
    } else {
      setSearchResults(undefined);
      setLoading(false);
    }
  }, [debouncedSearchWord, handleSearch]);

  return (
    <div>
      <Input
        defaultValue={searchedWord}
        onChange={(e) => {
          e.target.value !== "" && setLoading(true);
          setSearchedWord(e.target.value);
        }}
        autoFocus
      />
      {!readOnly &&
        (loading ? (
          <div className={"flex justify-center"}>
            <Spinner />
          </div>
        ) : (
          <SearchResults
            searchedWord={searchedWord}
            searchResults={searchResults}
          />
        ))}
    </div>
  );
};

export default Search;
