import React from 'react'
import List from './List'
import Search from "./Search";
import SearchType from './SearchType';
import Count from './Count'
const Context = ({children}) => {
  return (
    <List>
      <Search>
        <SearchType>
          <Count>
            {children}
          </Count>
        </SearchType>
      </Search>
    </List>
  )
}

export default Context
