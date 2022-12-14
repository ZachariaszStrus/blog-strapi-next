import React, {FC} from 'react';
import {ArticleEntity} from "@api";
import {Text} from "./Text";
import NoSearchResults from "./NoSearchResults";
import NextLink from "next/link";
import {routes} from "@utils";
import {useAtom} from "jotai";
import {modalState} from "./Modal";

interface SearchResultsProps {
    searchedWord: string;
    searchResults: ArticleEntity[] | undefined;
}
//TODO highlight searched word in searchResults
const SearchResults:FC<SearchResultsProps> = ({searchResults, searchedWord}) => {
    const [, setShowModal]=useAtom(modalState);

    const getResultWithHighlights = (result: string) => {
        const parts = result.split(new RegExp(`(${searchedWord})`, 'gi'));
        return <span> { parts.map((part, i) =>
            <span key={i}
                  className={part.toLowerCase() === searchedWord.toLowerCase() ? 'bg-primary-300 text-background-dark': ''}
            >
            { part }
        </span>)
        } </span>;
    }

    if (searchedWord === '') return null;
    return (
        <div>
            {searchResults?.length ? searchResults.map(({id, attributes}) => <div key={id} className={'space-y-1 mb-3 hover:bg-gray-800 p-2 rounded-md'}><NextLink href={routes.articleDetails(attributes?.slug as string)} onClick={() => setShowModal(false)}><div>{getResultWithHighlights(attributes?.title as string)}</div><Text faded>{getResultWithHighlights(attributes?.description as string)}</Text><div className={'border-b w-full border-gray-600 pt-2'}/></NextLink></div>) : <NoSearchResults searchedWord={searchedWord} />}
        </div>
    );
};

export default SearchResults;