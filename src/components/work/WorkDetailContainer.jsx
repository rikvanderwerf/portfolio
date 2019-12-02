import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitContainer from '../SplitContainer';

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageRight: PropTypes.bool,
};

const defaultProps = {
  imageRight: false,
};


const WorkDetailContainerHolder = styled(SplitContainer)`
  height: 500px;
  margin-bottom: 150px;
`;

const ImageHolder = styled.div`
  grid-column: ${(props) => (props.imageRight ? '2' : '1')};
  width: 100%;
  padding: 75px;
  height: 350px;
`;

const Image = styled.img`
  width: 100%;
  heigth: 100%;
`;

const DescriptionContainer = styled.div`
  grid-column: ${(props) => (props.imageRight ? '1' : '2')};
  heigth: 350px;
  width: 100%;
  margin-top: 75px;
  padding: 75px;
  padding-left: 125px;
  padding-right: 125px;
`;

const Title = styled.div`
  font-family: Vollkorn;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 15px;
  color: ${(props) => props.theme.titlecolor};
`;

const Description = styled.div`
  width: 100%;
`;

function WorkDetailContainer(props) {
  const {
    image, title, children, imageRight,
  } = props;
  return (
    <WorkDetailContainerHolder>
      {imageRight ? null : <ImageHolder imageRight={imageRight}><Image src={image} /></ImageHolder>}
      <DescriptionContainer imageRight={imageRight}>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </DescriptionContainer>
      {imageRight ? <ImageHolder imageRight={imageRight}><Image src={image} /></ImageHolder> : null}
    </WorkDetailContainerHolder>
  );
}

WorkDetailContainer.propTypes = propTypes;
WorkDetailContainer.defaultProps = defaultProps;

export default WorkDetailContainer;
