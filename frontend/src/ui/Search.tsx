import React, {FC, useEffect, useState} from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {api, ArticleEntity} from "@api";
import SearchResults from "./SearchResults";

interface SearchProps {
    handleClick?: ()=> void;
    readOnly?: boolean;
}

const Search: FC<SearchProps> = ({handleClick, readOnly= false}) => {
    const [hover, setHover]=useState(false)
    const [searchedWord, setSearchedWord]=useState('')
    const [searchResults, setSearchResults]=useState<ArticleEntity[] | undefined>(undefined)

    const handleSearch = async () => {
        const res = await api.searchArticles({searchedWord})
        setSearchResults(res.search?.articles?.data)
    }

    useEffect(() => {
        handleSearch()
    }, [searchedWord])

    return (
        <div>
        <div className="relative text-gray-600 focus-within:text-gray-400 mb-3" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onClick={handleClick}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <MagnifyingGlassIcon     className="h-6 w-6 cursor-pointer text-primary-300" />
      </span>
        <input
               className={`py-2 text-sm text-fg-faded bg-gray-900 rounded-md pl-10 focus:outline-none ${hover && readOnly && 'border border-primary-300'} ${readOnly && 'cursor-pointer'} ${!readOnly && 'focus:border focus:border-primary-300'} w-full`}
               placeholder="Search..." readOnly={readOnly}  autoComplete={'off'} onChange={(e) => setSearchedWord(e.target.value)}/>
    </div>
           <SearchResults searchedWord={searchedWord} searchResults={searchResults} />
        </div>
    )
}

export default Search