import React, { FC } from "react";
import { ArticleEntity } from "@api";
import { Text } from "@ui";
import { displaySearchState } from "./state";
import NextLink from "next/link";
import { routes } from "@utils";
import { useAtom } from "jotai";
import { NoSearchResults } from "./NoSearchResults";

interface SearchResultsProps {
  searchedWord: string;
  searchResults: ArticleEntity[] | undefined;
}

export const SearchResults: FC<SearchResultsProps> = ({
  searchResults,
  searchedWord,
}) => {
  const [, setShowModal] = useAtom(displaySearchState);

  const getResultWithHighlights = (result: string) => {
    const parts = result.split(new RegExp(`(${searchedWord})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === searchedWord.toLowerCase()
                ? "bg-primary-300 text-background-dark"
                : ""
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  if (searchedWord === "") return null;
  return (
    <div className="flex flex-col gap-3">
      {searchResults?.length ? (
        searchResults.map(
          ({ id, attributes }) =>
            attributes && (
              <div
                key={id}
                className="space-y-1 rounded-md p-3 hover:bg-gray-900"
              >
                <NextLink
                  href={routes.articleDetails(attributes.slug)}
                  onClick={() => setShowModal(false)}
                >
                  <Text pb>{getResultWithHighlights(attributes.title)}</Text>
                  <Text faded>
                    {getResultWithHighlights(attributes.description)}
                  </Text>
                  <div className="w-full border-b border-gray-600 pt-2" />
                </NextLink>
              </div>
            )
        )
      ) : (
        <NoSearchResults searchedWord={searchedWord} />
      )}
    </div>
  );
};
