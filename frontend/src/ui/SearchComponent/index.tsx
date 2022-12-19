import React, { FC, useCallback, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { api, ArticleEntity } from "@api";
import { useDebounce } from "../utils";
import Spinner from "../Spinner";
import SearchResults from "./SearchResults";

interface SearchProps {
    handleClick?: () => void;
    readOnly?: boolean;
}

const Search: FC<SearchProps> = ({ handleClick, readOnly = false }) => {
    const [hover, setHover] = useState(false);
    const [searchedWord, setSearchedWord] = useState("");
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
            <div
                className="relative mb-3 text-gray-600 focus-within:text-gray-400"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-primary-300" />
        </span>
                <input
                    className={`rounded-md bg-gray-900 py-2 pl-10 text-sm text-fg-faded focus:outline-none ${
                        hover && readOnly && "border border-primary-300"
                    } ${readOnly && "cursor-pointer"} ${
                        !readOnly && "focus:border focus:border-primary-300"
                    } w-full`}
                    placeholder="Search..."
                    readOnly={readOnly}
                    autoComplete={"off"}
                    onChange={(e) => {
                        e.target.value !== "" && setLoading(true);
                        setSearchedWord(e.target.value);
                    }}
                />
            </div>
            {loading ? (
                <div className={"flex justify-center"}>
                    <Spinner />
                </div>
            ) : (
                <SearchResults
                    searchedWord={searchedWord}
                    searchResults={searchResults}
                />
            )}
        </div>
    );
};

export default Search;