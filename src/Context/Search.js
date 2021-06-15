import React, { createContext , useState } from 'react'
export const SearchList=createContext();
const Search = ({children}) => {
  const [searchdata, setSearchdata] = useState([]);
  return (
    <SearchList.Provider value={[searchdata, setSearchdata]}>
      {children}
    </SearchList.Provider>
  )
}

export default Search
