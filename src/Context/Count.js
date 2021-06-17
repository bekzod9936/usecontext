import React, { createContext, useReducer, useContext } from 'react';
import { ListData } from './List'
export const CountNumber=createContext();
const Count = ({children}) => {
  const [state, dispatch] = useContext(ListData)
  const reducer=(state, action)=>{
    switch (action.type) {
      case 'change': return {...state , current: action.payload.value};
      default: return state ;
    }
  }
  const [count, dispatchCount] = useReducer(reducer, { length: state, current: state.length } )
  return (
    <CountNumber.Provider value={[count, dispatchCount]}>
      {children}
    </CountNumber.Provider>
  )
}

export default Count
