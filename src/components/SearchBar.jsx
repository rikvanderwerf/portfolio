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
  line-height: 70px;
  vertical-align: middle;
`;

const IconCard = styled(Card)`
  float: right;
  margin: 10px;
  height: 50px;
  width: 50px;
  right: 0;
  postion: relative;
  background-color: ${(props) => props.theme.maincolor};
  box-shadow: 0 10px 15px -3px ${(props) => props.theme.maincolorshadow};
`;

const IconHolder = styled.div`
  margin: 0 auto;
  width: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  height: 100%;
`;

const SearchResult = styled.div`
  font-size: 13px;
  float: right;
  text-align: right;
  margin-top: 5px;
`;

function SearchBar(props) {
  const { children } = props;
  return (
    <SearchBarHolder>
      <TextHolder>{children}</TextHolder>
      <IconCard><IconHolder><Icon icon={faSearch} /></IconHolder></IconCard>
      <SearchResult>1 search result found</SearchResult>
    </SearchBarHolder>
  );
}

SearchBar.defaultProps = defaultProps;
SearchBar.propTypes = propTypes;

export default SearchBar;
