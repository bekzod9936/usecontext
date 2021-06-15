import React, { useState, useContext, useEffect } from 'react'
import { Container, Tablee ,Button } from "./style";
import Tinfo from "./Tinfo";
import { ListData } from '../../Context/List';
import { SearchList} from '../../Context/Search'
import { HiDotsVertical } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { CountNumber } from "../../Context/Count";
import { CgArrowsV } from "react-icons/cg";
const Table = () => {
  const [toggle, setToggle] = useState(false);
  const [ren , setRen] =useState([]);
  const [data, setData] = useContext(ListData)
  const [searchdata, setSearchdata] = useContext(SearchList);
  const [count, setCount] = useContext(CountNumber);

  const handleDelete=(id)=>{
    const data1 = data.filter(v =>  v.id!== id );
    setData(data1)
  }
  const handleName=()=>{
    data.sort((a , b) => a.name > b.name ? 1: -1)
    setData(data)
    setToggle(!toggle)
  }
  const handleDate=()=>{
    data.sort((a , b) =>{
      const a1 = new Date(a.data.split('/')[2], a.data.split('/')[0], a.data.split('/')[1]);
      const b1 = new Date(b.data.split('/')[2], b.data.split('/')[0], b.data.split('/')[1])
      return  a1 > b1 ? 1 : -1;
    })
    setData(data)
    setToggle(!toggle)
  }
  const handleRecord = () => {
    data.sort((a, b) => a.record > b.record ? 1 : -1)
    setData(data)
    setToggle(!toggle)
  }
  const handleEmail = () => {
    data.sort((a, b) => a.email > b.email ? 1 : -1)
    setData(data)
    setToggle(!toggle)
  }
  const handleLocation = () => {
    data.sort((a, b) => a.location > b.location ? 1 : -1)
    setData(data)
    setToggle(!toggle)
  }
  const handleBestSong = () => {
    data.sort((a, b) => a.bestsong > b.bestsong ? 1 : -1)
    setData(data)
    setToggle(!toggle)
  }
  const handleSave = (id , emaill) => {
    data.map(v => { if (id === v.id) { return v.email= emaill} else {return {...v}}} )
  }
  useEffect(() => {
   if(searchdata.length === 0){;
       setRen(data);
   }else {
    setRen(searchdata)}
  }, [data , searchdata]);
  return (
    <Container>
      <Tablee>
        <Tablee.Thead>
          <Tablee.Tr>
            <Tablee.Th center><input  type='checkbox' /></Tablee.Th>
            <Tablee.Th><Button onClick={() => handleName()} bold>Name <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={handleEmail} bold>Email <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={handleDate} bold>Date <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={handleRecord} bold>Record <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={handleLocation} bold>Location <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th><Button onClick={handleBestSong} bold>Best Song <CgArrowsV color='blue' /></Button></Tablee.Th>
            <Tablee.Th>Delete</Tablee.Th>
          </Tablee.Tr>
        </Tablee.Thead>
        <Tablee.Tbody>
          {
            ren.filter((value, index) => count >= index).map(value => 
              <Tinfo key={value.id}   save={handleSave} value={value} delete={handleDelete} />)
          }
        </Tablee.Tbody>
      </Tablee>
    </Container>
  )
}

export default Table
