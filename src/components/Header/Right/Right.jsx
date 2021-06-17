import React, { useContext } from 'react'
import { Div, Box, Select } from "../style";
import { CountNumber } from '../../../Context/Count';
const Right = () => {
  const [count, dispatchCount] = useContext(CountNumber);
  return(
    <Div.Right>
      <Box>Show: <Select onChange={(e) => dispatchCount({type: 'change' , payload: {value: e.target.value}})} value={count.current} >
        {
          count.length.map((v, i) => <Select.Option key={i} value={i+1}>{i + 1}</Select.Option>)
        }
        </Select></Box>
    </Div.Right>
  )
}

export default Right
