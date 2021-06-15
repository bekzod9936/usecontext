import React , {useContext, useState} from 'react'
import { Div } from "../style";
import { ListData } from "../../../Context/List";
import { SearchList } from "../../../Context/Search";
import {Type} from '../../../Context/SearchType'
import {nanoid} from 'nanoid';
const Left = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useContext(ListData);
  const [type, setType] = useContext(Type);
  const [searchdata, setSearchdata] = useContext(SearchList)
  const handleSearch=(e)=>{
    let newdata=[]
    switch (type) {
      case 'Name': newdata= data.filter(v => v.name.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      case 'Email':  newdata = data.filter(v => v.email.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      case 'Date': newdata = data.filter(v => v.data.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      case 'Record': newdata = data.filter(v => v.record.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      case 'Location': newdata = data.filter(v => v.location.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      case 'Best Song': newdata = data.filter(v => v.bestsong.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
      default:
        newdata = data.filter(v => v.name.toLowerCase().includes(e.target.value.toLowerCase())); setSearchdata(newdata); break;
    }
  }
  const handleMenu=(name)=>{
    setToggle(!toggle);
     setType(name);
  }
  const elem = ['Name', 'Email', 'Date', 'Record', 'Location', 'Best Song' ];
  return (
    <Div.Left>
      <Div.Icon>Fiter Results <Div.Button onClick={()=>setToggle(!toggle)}><Div.Advanced color='blue' /></Div.Button> 
        <Div.Filter toggle={toggle}>
          <ul>
            {
              elem.map(v  => <li key={nanoid()}><Div.LiButton onClick={()=>handleMenu(v)}>{v}</Div.LiButton></li> )
            }
          </ul>
        </Div.Filter>
      </Div.Icon>
      <Div.InputWrapper>
        <Div.Search /> 
        <input type='text' onKeyUp={handleSearch} placeholder={`Search by ${type}` } />
      </Div.InputWrapper>
    </Div.Left>
  )
}

export default Left
