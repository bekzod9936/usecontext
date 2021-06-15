import React, { useContext } from 'react'
import { Div, Box, Select } from "../style";
import { CountNumber } from '../../../Context/Count';
import { ListData } from "../../../Context/List";
const Right = () => {
  const [count, setCount] = useContext(CountNumber);
  const [data, setData] = useContext(ListData);
  const handleChange=(e)=>{
          setCount(e.target.value)
  }
  return(
    <Div.Right>
      <Box>Show: <Select onChange={handleChange} value={count}>
        {
          
          data.map((v, i) => <Select.Option key={i} value={i}>{i + 1}</Select.Option>)
        }
        </Select></Box>
    </Div.Right>
  )
}

export default Right
