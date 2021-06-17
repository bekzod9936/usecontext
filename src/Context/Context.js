import React from 'react'
import List from './List'
import Search from "./Search";
import Count from './Count'
const Context = ({children}) => {
  return (
    <List>
      <Search>
          <Count>
            {children}
          </Count>
      </Search>
    </List>
  )
}

export default Context
