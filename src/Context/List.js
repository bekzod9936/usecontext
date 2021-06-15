import axios from 'axios'
import React, { createContext, useState , useEffect} from 'react'

export const ListData=createContext()

const List = ({children}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3005/list`)
    .then(response => setData(response.data))
  }, [])
  return (
    <ListData.Provider value={[data, setData]}>
      {children}
    </ListData.Provider>
  )
}

export default List
