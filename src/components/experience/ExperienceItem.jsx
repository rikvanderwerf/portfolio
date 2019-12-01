import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExperienceImage from '../../Images/experience.svg';

const propTypes = {
  icon: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  line: PropTypes.bool,
};

const defaultProps = {
  line: true,
};

const Container = styled.div`
  width: 400px;
  margin-bottom: 50px;
`;

const OuterCircle = styled.div`
  width: 80px;
  height: 80px;
  padding: 10px;
  float: left;
  z-index: 10;
  background-color: ${(props) => props.theme.iconcolor};
  border-radius: 50%;
  box-shadow: 1px 1px 15px 5px  rgba(134, 173, 245, 0.1);
  position: relative;
`;

const InnerCircle = styled.div`
  width: 60px;
  height: 60px;
  z-index: 10;
  background-color: ${(props) => props.theme.maincolor};
  border-radius: 50%;
`;

const Line = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  width: 1px;
  background-color: ${(props) => props.theme.maincolor};
  height: 150px;
  margin-left: 40px;
  position: absolute;
  z-index: 1;
`;

const IconHolder = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconcolor};
  display: block;
  margin: auto;
  padding-top: 20px;
`;

const TextHolder = styled.div`
  display: grid;
  margin-left: 200px;
  width: 100%;
  template-grid-rows: auto auto auto;
`;

const Title = styled.span`
  font-weigth: 700;
  float: left;
  margin-bottom: 10px;
  font-size: 20px;
  grid-row: 1;
  color: ${(props) => props.theme.titlecolor}
`;

const SubTitle = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.textcolor};
  float: left;
  grid-row: 2;
  z-index: 2;
`;

const SubSubTitle = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.subtextcolor};
  float: left;
  grid-row: 3;
  z-index: 2;
`;

function ExperienceItem(props) {
  const {
    icon, children, company, date, line,
  } = props;
  return (
    <Container>

      <OuterCircle>
        <InnerCircle><IconHolder icon={icon} /></InnerCircle>
      </OuterCircle>
      <Line visible={line} />
      <TextHolder>
        <Title>{ children }</Title>
        <SubTitle>{ company }</SubTitle>
        <SubSubTitle>{ date }</SubSubTitle>
      </TextHolder>

    </Container>
  );
}

ExperienceItem.propTypes = propTypes;
ExperienceItem.defaultProps = defaultProps;

export default ExperienceItem;
