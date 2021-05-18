import React, { ReactNode, useEffect, useState } from "react";

const SearchContext = React.createContext({
    isSearchOpen: false,
    setisSearchOpen: (arg) => {},
    searchValue: "",
    setSearchValue: (arg) => {}
});

interface Props {
  children: ReactNode;
}

const SearchContextProvider = ({ children }: Props) => {
  const [isSearchOpen, setisSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  return (
    <SearchContext.Provider
    value={{
        isSearchOpen,
        setisSearchOpen,
        searchValue,
        setSearchValue
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

export { SearchContextProvider };