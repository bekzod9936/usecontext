import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
export const CountNumber=createContext();
const Count = ({children}) => {
  const [count , setCount]=useState();
  useEffect(() => {
    axios.get(`http://localhost:3005/list`)
    .then(response => setCount(response.data.length))
  }, [])
  return (
    <CountNumber.Provider value={[count, setCount]}>
      {children}
    </CountNumber.Provider>
  )
}

export default Count
