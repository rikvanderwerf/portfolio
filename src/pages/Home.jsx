import React from 'react';
import styled from 'styled-components';
import media from '../util/media';

const Content = styled.div`
  display: grid;
  background-color: black;
  align-items: center;
  margin: 0 auto;
  height: 1000px;
  max-width: 1350px;
  width: 80%;
  padding: 100px 0px;
  justify-self: center;
`;

class Home extends React.Component {
  render() {
    return (
      <Content>sdf</Content>
    );
  }
}

export default Home;
