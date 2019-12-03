import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import media from '../util/media';

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

  ${media.phone`
    width: 90%;
    height: 50px;
  `}
`;

const TextHolder = styled.div`
  color: #4A4A4A;
  margin-left: 20px;
  float: left;
  width: 80%;
  font-size: 30px;
  line-height: 70px;
  vertical-align: middle;

  ${media.phone`
    font-size: 20px; 
    width: 70%;
    line-height: 50px;
  `}
`;

const IconCard = styled(Card)`
  float: right;
  margin: 10px;
  height: 50px;
  width: 50px;
  right: 0;
  postion: relative;
  background-color: ${(props) => props.theme.maincolor};
  box-shadow: 1px 1px 15px 5px  ${(props) => props.theme.maincolorshadow};

  ${media.phone`
  margin: 5px;
  height: 40px;
  width: 40px;
`}
`;

const IconHolder = styled.div`
  margin: 0 auto;
  width: 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconcolor};;
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
