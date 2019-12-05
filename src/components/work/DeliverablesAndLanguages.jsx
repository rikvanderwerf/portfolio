import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from '../../util/media';


const propTypes = {
  deliverables: PropTypes.objectOf(PropTypes.array).isRequired,
  languages: PropTypes.objectOf(PropTypes.array).isRequired,
};


const DeliverablesAndLanguagesContainer = styled.div`
  display: grid;
  margin-left: 75px;
  margin-right: 75px;
  margin-top: 20px;
  grid-template-columns: [deliverables] 50% [Languages] 50%;
  height: 300px;

  ${media.tablet`
    margin-left: 10px;
    margin-right: 10px;
  `}

  ${media.phone`
    display: inline;
  `} 
`;

const Deliverables = styled.div`
  grid-column: 1;
  width: 100%;
  padding: 20px;

  ${media.tablet`
    padding-right: 50px;
  `}
  
  ${media.phone`
    padding-right: 20px;
  `}

`;

const Languages = styled.div`
  grid-column: 2;
  width: 100%
  padding: 20px;

  ${media.tablet`
    padding-left: 50px;
  `}

  ${media.phone`
    padding: 20px;
  `}
`;

const Title = styled.li`
  font-family: Vollkorn;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => (props.inverted ? props.theme.invertedtitlecolor : props.theme.titlecolor)} !important

  ${media.phone`
    color: ${(props) => props.theme.titlecolor}; !important
  `}
`;

const List = styled.ul`
  list-style-type: none;
  width: 175px;
  display: block;
  margin: 0 auto;
  padding-inline-start: 0px;

  > li {
    color: ${(props) => (props.inverted ? props.theme.invertedtextcolor : props.theme.textcolor)}
  }

  ${media.phone`
  > li {
    color: ${(props) => props.theme.textcolor};
  }

`}
`;

function DeliverablesAndLanguages(props) {
  const { deliverables, languages } = props;
  return (
    <DeliverablesAndLanguagesContainer>
      <Deliverables>
        <List inverted>
          <Title inverted>Deliverables</Title>
          {deliverables.map((value, index) => <li key={'index-'.concat(index)}>{value}</li>)}
        </List>
      </Deliverables>
      <Languages>
        <List>
          <Title>Languages</Title>
          {languages.map((value, index) => <li key={'index-'.concat(index)}>{value}</li>)}
        </List>
      </Languages>
    </DeliverablesAndLanguagesContainer>
  );
}

DeliverablesAndLanguages.propTypes = propTypes;

export default DeliverablesAndLanguages;
