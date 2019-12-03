import React from 'react';
import styled from 'styled-components';
import Python from '../images/skills/python.png';
import Javascript from '../images/skills/javascript.png';
import Kotlin from '../images/skills/kotlin.png';
import Java from '../images/skills/java.png';
import Swift from '../images/skills/swift.png';
import ReactImage from '../images/skills/react.png';
import Postgresql from '../images/skills/postgresql.png';
import Gcp from '../images/skills/gcp.png';
import Docker from '../images/skills/docker.png';
import media from '../util/media';

const Container = styled.div`
  margin-top: 75px;
`;

const ContainerTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-family: Vollkorn;
  grid-column: 1/3;
  margin-bottom: 50px;
  color: ${(props) => props.theme.titlecolor}
`;

const ImageHolder = styled.img`
  width: 180px;
  max-height: 150px;
  margin: 30px;
  vertical-align: middle;
`;

const Helper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const ImageItem = styled.li`
  float: left;
  white-space: nowrap;
  margin-bottom: 50px;
  height: 150px;

`;

const List = styled.ul`
  list-style-type: none;

  ${media.tablet`
    width: 100%;
  `}

  ${media.phone`
    width: 80%;
  `}
`;

const SecondRowList = styled.ul`
  list-style-type: none;
  width: 1090px;
  display: block; 
  margin: 0 auto;
 
  ${media.phone`
    width: 80%;
    margin: 0;
  `} 

  ${media.tablet`
   
  `} 
`;

function SkillsContainer(props) {
  return (
    <Container>
      <ContainerTitle>Skills</ContainerTitle>
      <List>
        <ImageItem>
          <Helper />
          <ImageHolder src={Python} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Javascript} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Kotlin} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Java} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Swift} />
        </ImageItem>
      </List>
      <SecondRowList>
        <ImageItem>
          <Helper />
          <ImageHolder src={ReactImage} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Postgresql} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Gcp} />
        </ImageItem>
        <ImageItem>
          <Helper />
          <ImageHolder src={Docker} />
        </ImageItem>
      </SecondRowList>
    </Container>
  );
}


export default SkillsContainer;
