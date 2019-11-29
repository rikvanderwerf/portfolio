import React from 'react';
import styled from 'styled-components';
import media from '../util/media';

const Content = styled.div`

  display: grid;
  grid-column-gap: 40px;
  background-color: black;
  align-items: center;
  height: 1000px;
  max-width: 1350px;
  width: 80%;
  padding: 100px 0px;
  justify-self: center;
`;

class Home extends React.Component {
  componentDidMount() {
    console.log("asda");
  }

  render() {
    return (
        <Content>sdf</Content>
    );
  }
}

export default Home;