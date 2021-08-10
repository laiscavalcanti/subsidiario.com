import React from "react";

import * as S from "./styled";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom";

import Hit from "./Hit";

const Search = ({ algolia }) => {
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);
  return (
    <S.SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox translations={{ placeholder: "Pesquisar..." }} />
        <Hits hitComponent={Hit} />
        <Configure hitsPerPage={10} />
      </InstantSearch>
    </S.SearchWrapper>
  );
};
export default Search;
