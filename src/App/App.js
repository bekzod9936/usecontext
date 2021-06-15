import React from 'react';
import { Container , Wrapper} from './style';
import Table from '../components/Table/Table';
import Header from '../components/Header/Header';
const App = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
      <Table />
      </Wrapper>
    </Container>
  )
}

export default App
