import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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

const IconHolder = styled(Card)`
  float: right;
  margin: 10px;
  height: 50px;
  width: 50px;
  right: 0;
  background-color: ${(props) => props.theme.maincolor};
  drop-shadow: box-shadow: 0 10px 15px -3px ${(props) => props.theme.maincolorshadow};
`;

const Icon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
  padding: 5px;
  color: white;
`;

function SearchBar(props) {
  const children = { props };
  return (
    <SearchBarHolder>
      <TextHolder>Rik van der Werf</TextHolder>
      <IconHolder />
    </SearchBarHolder>
  );
}

SearchBar.defaultProps = defaultProps;
SearchBar.propTypes = propTypes;

export default SearchBar;


// <Icon icon={faCoffee} />
