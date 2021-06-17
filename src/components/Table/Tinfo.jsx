import React, { useState, useContext, useEffect} from 'react'
import { Tablee, Button, InputEmail, Wrapper} from "./style";
import { MdEdit, MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { ListData } from '../../Context/List';
const Tinfo = (props) => {
  const {id , name , email , data , record , location , bestsong }=props.value ;
  const [toggle, setToggle] = useState(false);
  const [emaill , setEmail]=useState('');
  const [state, dispatch] = useContext(ListData)
  const [check, setCheck] = useState(false);
  useEffect(() => {
    setCheck(props.checkValue);
  }, [props.checkValue]);
   return(
     < Tablee.Tr>
       <Tablee.Td center><input     type='checkbox' checked={check} onChange={()=> setCheck(!check)} /></Tablee.Td>
       <Tablee.Td>{name}</Tablee.Td>  
       <Tablee.Td email><InputEmail  value={emaill ? emaill : email} checked={check}  dis={toggle} onChange={(e)=> setEmail(e.target.value)} disabled={!toggle} size={email.length} /><Button  onClick={()=>setToggle(!toggle)} >
         {
           !toggle && <MdEdit color='blue' />
         }
         </Button>
       {
           toggle && <Wrapper><FaCheck color='green' onClick={(e) => { dispatch({ type: 'updateEmail', payload: { id: id, email: emaill ? emaill : email } }); setToggle(!toggle) }} /><span>|</span><MdClose color='red' onClick={() => { dispatch({ type: 'updateEmail' , payload: {id: id , email: email}}) ;setToggle(!toggle) ; setEmail('')} } /></Wrapper>
       }
       </Tablee.Td>
       <Tablee.Td>{data}</Tablee.Td>
       <Tablee.Td>{record}</Tablee.Td>
       <Tablee.Td>{location}</Tablee.Td>
       <Tablee.Td>{bestsong}</Tablee.Td>
       <Tablee.Td center><Button onClick={()=>dispatch({type: 'delete' , payload: {id: id}})}>Delete</Button></Tablee.Td>
     </Tablee.Tr >
   )
}

export default Tinfo
