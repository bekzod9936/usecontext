import styled , {css} from 'styled-components';

const flex=css`
display: flex;
justify-content: space-between;
border: none;
height: 100%;
margin-top: 5px;
`;
const input1=css`
  background-color: transparent;
  border: none;
  color: blue;
`;
const input2 = css`
  background-color: white;
  border: 1px solid blue;
  color: #333;
`;

export const Container=styled.div`
width: 100%;
background-color: white;
border-radius: 5px;
overflow-x: auto;
`;

export const Tablee=styled.table`
border: 1px solid grey;
border-collapse: collapse;
width: 100%;
`;

Tablee.Thead = styled.thead``;
Tablee.Tbody = styled.tbody``;
Tablee.Tr = styled.tr`
border: 1px solid grey;
:nth-child(even){
  background-color: #f8f8f8;
}
height: 100%;
`;
Tablee.Th= styled.th`
border: 1px solid grey;
text-align: ${props=> props.center ? 'center' : 'left'};
padding: ${props => props.center ? '10px' : '5px 5px 5px 10px'} ;
`;
Tablee.Td = styled.td`
border: 1px solid grey;
padding: ${props => props.center ? '10px' : '0 10px'} ;
text-align: ${props => props.center ? 'center' : 'left'};
 ${props => props.email ? `${flex}` : null};
height: 100%;
`;

export const Button=styled.button`
background-color: transparent;
display:flex;
align-items: center;
font-weight:${props => props.bold ? '800' : null};
font-size: ${props => props.bold ? '14px' : null};
width: ${props => props.bold ? '100%' : null};
`;

export const InputEmail=styled.input`
height: 30px;
font-size: 14px;
padding: 5px ;
outline: none;
${props => props.dis ? `${input2}` : `${input1}` }
`;  

export const Wrapper=styled.div`
display: flex;
justify-content: center;
align-items: center;
span{
  margin: 0 5px;
  color: grey;
}
`;