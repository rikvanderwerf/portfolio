import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from '../../util/media';
import ExperienceImage from '../../Images/experience.svg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Container = styled.div`
  margin-top: 75px;
  display: grid;
  grid-template-columns: 60% 40%;

  ${media.phone`
    display: inline;
  `}


  ${media.tablet`
    display: inline;
  `}
`;

const ContainerTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-family: Vollkorn;
  grid-column: 1/3
  margin-bottom: 50px;
  color: ${(props) => props.theme.titlecolor}
`;

const ImageHolder = styled.img`
  width: 100%;
  height: 700px;
  grid-column: 1;

  ${media.phone`
    display: none;
  `}

  ${media.tablet`
    display: none;
  `}
`;

const ExperienceListContainer = styled.div`
  margin-top: 100px;
  margin-left: -30%;
  grid-column: 2;

  ${media.phone`
  display: block;
  margin: 0 auto;
`} 

  ${media.tablet`
    display: block;
    margin: 0 auto;
  `}
`;

function ExperienceContainer(props) {
  const { children } = props;
  return (
    <Container>
      <ContainerTitle>Experience</ContainerTitle>
      <ImageHolder src={ExperienceImage} />
      <ExperienceListContainer>
        {children}
      </ExperienceListContainer>
    </Container>
  );
}

ExperienceContainer.propTypes = propTypes;
ExperienceContainer.defaultProps = defaultProps;

export default ExperienceContainer;
