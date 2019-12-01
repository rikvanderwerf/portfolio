import React from 'react';
import styled from 'styled-components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../components/Card';
import InvyteShowcase from '../images/showcase/invyte-app-showcase.png';

const TopBar = styled.div`
  width: 100%;
  heigth: 100px;
`;

const BackArrow = styled.div`
  max-height: 150px;
  margin: 30px;
  vertical-align: middle;
`;

const Helper = styled.div`
  display: inline-block;
  height: 100%;
  float: left;
  vertical-align: middle;
`;

const Background = styled.div`
  width: 50%;
  position: absolute;
  z-index: 1;
  height: 1000px;
  background-color: ${(props) => props.theme.backgroundsecondarycolor}
`;

const OuterContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1350px;
  margin: 0 auto;
  width: 80%;
`;

const TopImageCard = styled(Card)`
  display: block;
  margin: auto;
  margin-top: 75px;
  width: 1000px;
  height: 650px;
  background-size: 100% 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;

function Work(props) {
  return (
    <div>
      <TopBar>
        <Helper />
        <BackArrow><FontAwesomeIcon icon={faArrowLeft} /></BackArrow>
      </TopBar>
      <Background />
      <OuterContainer>
        <TopImageCard image={InvyteShowcase} />
      </OuterContainer>
    </div>
  );
}

export default Work;
