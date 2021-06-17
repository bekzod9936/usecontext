import React, { createContext, useContext , useReducer } from 'react';
import { ListData } from "./List";
export const SearchList=createContext();
const Search = ({children}) => {
  const reducer=(state1, action)=>{
    switch (action.type) {
      case 'Name': const newname = state.filter(v => v.name.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newname, isActive: action.payload.target  };
      case 'Email': const newemail = state.filter(v => v.email.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newemail, isActive: action.payload.target };
      case 'Date': const newdate = state.filter(v => v.data.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newdate, isActive: action.payload.target };
      case 'Record': const newrecord = state.filter(v => v.record.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newrecord, isActive: action.payload.target };
      case 'Location': const newlocation = state.filter(v => v.location.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newlocation, isActive: action.payload.target };
      case 'Best Song': const newsong = state.filter(v => v.bestsong.toLowerCase().includes(action.payload.target.toLowerCase())); return { arr: newsong, isActive: action.payload.target };
      default:  return  state1 ;
    }
  }
  const [state, dispatch] = useContext(ListData)
  const [search, dispatchSearch] = useReducer(reducer, {arr: state , isActive: ''})
  return (
    <SearchList.Provider value={[search, dispatchSearch]}>
      {children}
    </SearchList.Provider>
  )
}

export default Search
