import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object.isRequired,
};

const defaultProps = {
  children: null,
};

const ButtonHolder = styled(Card)`
  height: 50px;
  width: 250px;
  background-color: ${(props) => props.theme.maincolor};
  box-shadow: 1px 1px 15px 5px  ${(props) => props.theme.maincolorshadow};
  position: relative;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const TextHolder = styled.div`
  color: #4A4A4A;
  margin-left: 20px;
  color: ${(props) => props.theme.iconcolor};;
  width: 80%;
  text-align: center;
  float: left;
  font-size: 20px;
  line-height: 50px;
  vertical-align: middle;
`;

const IconCard = styled(Card)`
  float: right;
  margin: 5px;
  height: 40px;
  position: absolute;
  width: 40px;
  right: 0;
  postion: relative;
  background-color: ${(props) => props.theme.maindarkcolor};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconcolor};
  height: 100%;
  width: 100%;
  display: block;
  margin: auto;
`;

function Button(props) {
  const { children, icon } = props;
  return (
    <ButtonHolder>
      <TextHolder>{children}</TextHolder>
      <IconCard>
        <Icon icon={icon} />
      </IconCard>
    </ButtonHolder>
  );
}

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
