import React, { createContext , useState } from 'react'
export const Type=createContext()
const SearchType = ({children}) => {
  const [type, setType] = useState('Name')
  return (
    <Type.Provider value={[type, setType]}>
      {children}
    </Type.Provider>
  )
}

export default SearchType
