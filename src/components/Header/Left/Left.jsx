import React , {useContext, useState} from 'react'
import { Div } from "../style";
import { SearchList } from "../../../Context/Search";
import {nanoid} from 'nanoid';
const Left = () => {
  const [toggle, setToggle] = useState(false);
  const [type, setType] = useState('Name');
  const [search, dispatchSearch] = useContext(SearchList)
  const elem = ['Name', 'Email', 'Date', 'Record', 'Location', 'Best Song' ];
  return (
    <Div.Left>
      <Div.Icon>Fiter Results <Div.Button onClick={()=>setToggle(!toggle)}><Div.Advanced color='blue' /></Div.Button> 
        <Div.Filter toggle={toggle}>
          <ul>
            {
              elem.map(v => <li key={nanoid()}><Div.LiButton onClick={() => { setToggle(!toggle); setType(v); }}>{v}</Div.LiButton></li> )
            }
          </ul>
        </Div.Filter>
      </Div.Icon>
      <Div.InputWrapper>
        <Div.Search /> 
        <input type='text'  onKeyUp={(e)=> {dispatchSearch({type: `${type}` , payload: {target: e.target.value}})}} placeholder={`Search by ${type}` } />
      </Div.InputWrapper>
    </Div.Left>
  )
}

export default Left
