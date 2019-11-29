import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Content = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  max-width: 1350px;
  width: 80%;
  padding: 100px 0px;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
`;


function Home(props) {
  return (
    <Content>
      <Header>
        <SearchBar>Rik van der Werf</SearchBar>
      </Header>
    </Content>
  );
}

export default Home;
