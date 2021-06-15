import React, { useState} from 'react'
import { Tablee, Button, InputEmail, Wrapper} from "./style";
import { MdEdit, MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
const Tinfo = (props) => {
  const {id , name , email , data , record , location , bestsong }=props.value ;
  const [toggle, setToggle] = useState(false);
  const [emaill , setEmail]=useState('');
  const [check , setCheck] = useState(false)
  const handleEdit = () => {
    setToggle(true);
  }
  const handleUpdate=(e)=>{
      setEmail(e.target.value)
  }
  const handleClose=(email)=>{
    setToggle(!toggle);
    setEmail(email);
  }
 
   return(
     < Tablee.Tr>
       <Tablee.Td center><input    type='checkbox' /></Tablee.Td>
       <Tablee.Td>{name}</Tablee.Td>  
       <Tablee.Td email><InputEmail defaultValue={email} value={emaill ? emaill : null} dis={toggle} onChange={handleUpdate} disabled={!toggle} size={email.length} /><Button  onClick={handleEdit} >
         {
           !toggle && <MdEdit color='blue' />
         }
         </Button>
       {
           toggle && <Wrapper><FaCheck color='green' onClick={() => { props.save(id, emaill); setToggle(!toggle) }} /><span>|</span><MdClose color='red' onClick={() => handleClose(email)} /></Wrapper>
       }
       </Tablee.Td>
       <Tablee.Td>{data}</Tablee.Td>
       <Tablee.Td>{record}</Tablee.Td>
       <Tablee.Td>{location}</Tablee.Td>
       <Tablee.Td>{bestsong}</Tablee.Td>
       <Tablee.Td center><Button onClick={()=>props.delete(id)}>Delete</Button></Tablee.Td>
     </Tablee.Tr >
   )
}

export default Tinfo
