import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import { RiEqualizerFill } from "react-icons/ri";
export const Container=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Div=styled.div`

`;

Div.Left=styled.div`
display: flex;
align-items: center;
`;
Div.Icon=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0 10px;
position: relative;
`;
Div.InputWrapper=styled.div`
display: flex;
align-items: center;
justify-content: center;
border-left: 1px solid grey;
border-right: 1px solid grey;
padding: 5px 15px;
position: relative;
input{
  height: 30px;
  border-radius: 3px;
  outline: none;
  padding: 3px 0 3px 30px;
  width: 200px;
}
`;
Div.Search = styled(BiSearch)`
position: absolute;
left: 25px;
top: 30%;
`;
Div.Advanced = styled(RiEqualizerFill)`
margin-left: 5px ;
margin-top: 5px;
width: 18px;
height: 18px;
`;
Div.Button=styled.button`
background-color: transparent;

`;
Div.Filter=styled.div`
position: absolute;
top: 125%;
left: 10%;
z-index: 99;
display:${props => props.toggle ? 'block' : 'none'} ;
width:100%;
background-color: blue;
/* z-index: ${props => props.toggle ? '999' : '-999'}; */
transition: display 2s linear;
ul{
  list-style-type: none;
  li{
    padding: 5px;
    border-bottom: 1px solid white;
  }
}
`;
Div.LiButton=styled.button`
background-color: transparent;
color: white;
width: 100%;
`;




Div.Right = styled.div`
display: flex;
align-items: center;
`;

export const Box=styled.div`
margin: 0 10px;
`;
export const Select=styled.select`
padding: 5px;
border-radius: 3px;
`;
Select.Option=styled.option`

`;