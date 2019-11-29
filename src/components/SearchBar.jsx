import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const SearchBarHolder = styled(Card)`
  width: 450px;
  height: 70px;
  margin: 0 auto;
  position: relative;
`;

const TextHolder = styled.div`
  color: #4A4A4A;
  margin-left: 20px;
  float: left;
  width: 80%;
  font-size: 30px;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const IconCard = styled(Card)`
  float: right;
  margin: 10px;
  height: 50px;
  width: 50px;
  right: 0;
  postion: relative;
  background-color: ${(props) => props.theme.maincolor};
  drop-shadow: box-shadow: 0 10px 15px -3px ${(props) => props.theme.maincolorshadow};
`;

const IconHolder = styled.div`
  margin: 0 auto;
  width: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  height: 100%;
`;

function SearchBar(props) {
  const children = { props };
  return (
    <SearchBarHolder>
      <TextHolder>Rik van der Werf</TextHolder>
      <IconCard><IconHolder><Icon icon={faSearch} /></IconHolder></IconCard>
    </SearchBarHolder>
  );
}

SearchBar.defaultProps = defaultProps;
SearchBar.propTypes = propTypes;

export default SearchBar;
