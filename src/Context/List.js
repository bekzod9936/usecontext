import React, { createContext,  useReducer} from 'react'
export const ListData=createContext()

const List = ({children}) => {
  const reducer=(state, action)=>{
    switch (action.type) {
      case 'loading': return action.payload.data ;
      case 'delete': const newList =state.filter(v=> v.id!== action.payload.id) ; return newList;
      case 'name': const newstate=state.sort((a, b) => a.name > b.name ? 1 : -1); return  newstate ;
      case 'date': const newdate=state.sort((a, b) => {
        const a1 = new Date(a.data.split('/')[2], a.data.split('/')[0], a.data.split('/')[1]);
        const b1 = new Date(b.data.split('/')[2], b.data.split('/')[0], b.data.split('/')[1])
        return a1 > b1 ? 1 : -1;
      }) ; return newdate;
      case 'record': const newrecord = state.sort((a, b) => a.record > b.record ? 1 : -1) ; return newrecord;
      case 'email': const newemail = state.sort((a, b) => a.email > b.email ? 1 : -1) ;  return newemail;
      case 'location': const newlocation = state.sort((a, b) => a.location > b.location ? 1 : -1) ; return newlocation;
      case 'bestsong': const newsong = state.sort((a, b) => a.bestsong > b.bestsong ? 1 : -1) ; return newsong;
      case 'updateEmail' : const newData=state.map(v =>{ if( v.id === action.payload.id){return {...v , email: action.payload.email} }else { return v ; }}); return newData ;
      default: return state;
    }
  }
  const initialState = [
    {
      id: 0,
      name: "Turnover",
      email: "turnover@@rfc.com",
      data: "04/14/2017",
      record: "Peripheral Vision",
      location: "Virginia Beach, VA",
      bestsong: "New Scream"
    },
    {
      id: 1,
      name: "A$AP Rocky",
      email: "flacko@asapmob.com",
      data: "03/20/2017",
      record: "AT.LONG.LAST.A$AP",
      location: "NYC,NY",
      bestsong: "L$D"
    },
    {
      id: 2,
      name: "Brand New",
      email: "jesselacy@brandnewrock.com",
      data: "12/08/2017",
      record: "The Devil and God are Raging in...",
      location: "Long Island,NY",
      bestsong: "Millstone"
    },
    {
      id: 3,
      name: "Childish Gambino",
      email: "donald@childishgambino.com",
      data: "08/06/2017",
      record: "Because The Internet",
      location: "Atlanta,GA",
      bestsong: "3005"
    }
  ]
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ListData.Provider value={[state, dispatch]}>
      {children}
    </ListData.Provider>
  )
}

export default List
