import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SplitContainer from '../SplitContainer';
import Button from '../buttons/Button';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  projectrole: PropTypes.string.isRequired,
};

const Description = styled.div`
  grid-colomn: 1;
`;

const StyledSplitContainer = styled(SplitContainer)`
  margin-bottom: 250px;
`;

const Title = styled.div`
  font-family: Vollkorn;
  font-weight: 600;
  font-size: 40px;
  color: ${(props) => props.theme.titlecolor};
`;

const SubTitle = styled.div`
  color: ${(props) => props.theme.invertedtextcolor}; 
  font-size: 26px;
`;

const RoleTitle = styled.div`
  font-family: Vollkorn; 
  margin-top: 50px;
  font-size: 22px;
`;

const Role = styled.div`
  color: ${(props) => props.theme.invertedtextcolor}
`;

const ButtonContainer = styled.div`
  grid-column: 2;
  width: 100%;
  display: block;
`;

const ButtonWrapper = styled.div`
  width: 250px;
  float: right;
  margin: auto;
  right: 0;
`;

function ProjectDescription(props) {
  const { title, subtitle, projectrole } = props;
  return (
    <StyledSplitContainer>
      <Description>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <RoleTitle>Role</RoleTitle>
        <Role>{projectrole}</Role>
      </Description>
      <ButtonContainer>
        <ButtonWrapper>
          <Button icon={faChevronRight}>Visit Invyte</Button>
        </ButtonWrapper>
      </ButtonContainer>
    </StyledSplitContainer>
  );
}

ProjectDescription.propTypes = propTypes;

export default ProjectDescription;
