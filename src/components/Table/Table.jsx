import React, { useState, useContext, useEffect } from 'react'
import { Container, Tablee ,Button } from "./style";
import Tinfo from "./Tinfo";
import { ListData } from '../../Context/List';
import { SearchList} from '../../Context/Search'
import { CountNumber } from "../../Context/Count";
import { CgArrowsV } from "react-icons/cg";
const Table = () => {
  const [toggle, setToggle] = useState(false);
  const [ren , setRen] =useState([]);
  const [state, dispatch]= useContext(ListData)
  const [search, dispatchSearch] = useContext(SearchList);
  const [count, dispatchCount]  = useContext(CountNumber);
  const [check, setCheck] = useState(false)
  useEffect(() => {
    if (search.isActive === ''){
       setRen(state);
   }else {
      setRen(search.arr)}
  }, [state, search]);
  return (
    <Container>
      <Tablee>
        <Tablee.Thead>
          <Tablee.Tr>
            <Tablee.Th center><input  type='checkbox' onClick={(e)=> setCheck(e.target.checked)}  /></Tablee.Th>
            <Tablee.Th><Button onClick={() => {dispatch({type: 'name'}) ; setToggle(!toggle);}} bold>Name <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={() => { dispatch({ type: 'email' }); setToggle(!toggle);}} bold>Email <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={() => { dispatch({ type: 'date' }); setToggle(!toggle);}} bold>Date <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={() => { dispatch({ type: 'record' }); setToggle(!toggle);}} bold>Record <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={() => { dispatch({ type: 'location' }); setToggle(!toggle);}} bold>Location <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={() => { dispatch({ type: 'bestsong' }); setToggle(!toggle);}} bold>Best Song <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th>Delete</Tablee.Th>
          </Tablee.Tr>
        </Tablee.Thead>
        <Tablee.Tbody>
          {
            ren.filter((value, index) => count.current-1 >= index).map(value => 
              <Tinfo key={value.id}  checkValue={check}   value={value}  />)
          }
        </Tablee.Tbody>
      </Tablee>
    </Container>
  )
}

export default Table
