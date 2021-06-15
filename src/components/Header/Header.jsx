import React from 'react';
import { Container } from "./style";
import Left from './Left/Left';
import Right from './Right/Right';
const Header = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  )
}

export default Header
