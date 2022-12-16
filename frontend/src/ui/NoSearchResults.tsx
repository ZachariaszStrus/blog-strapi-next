import React, { FC } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Text } from "./Text";

interface NoSearchResultsProps {
  searchedWord: string;
}

const NoSearchResults: FC<NoSearchResultsProps> = ({ searchedWord }) => (
  <div className={"flex-col space-y-4 pt-3"}>
    <div className={"flex w-full justify-center"}>
      <ExclamationCircleIcon className="h-6 w-6 cursor-pointer text-primary-300" />
    </div>
    <div className={"flex w-full justify-center"}>
      <Text faded>No results for</Text>
      <Text className={"pl-1 font-bold"}>{`"${searchedWord}"`}</Text>{" "}
    </div>
  </div>
);

export default NoSearchResults;
