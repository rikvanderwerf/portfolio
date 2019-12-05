import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitContainer from '../SplitContainer';
import media from '../../util/media';


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

  ${media.phone`
    display: inline;
  `}
`;

const ImageHolder = styled.div`
  grid-column: ${(props) => (props.imageRight ? '2' : '1')};
  width: 100%;
  padding: 75px;
  height: 350px;
  white-space: nowrap;
  display: flex;
  object-fit: contain;
  margin-top: 75px;

  ${media.tablet`
    padding: 25px;
  `}

  ${media.phone`
    display: none;
  `}
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

const DescriptionContainer = styled.div`
  grid-column: ${(props) => (props.imageRight ? '1' : '2')};
  heigth: 350px;
  width: 100%;
  margin-top: 75px;
  padding: 75px;
  padding-right: ${(props) => (props.imageRight ? '125px' : '75px')};
  padding-left: ${(props) => (props.imageRight ? '75px' : '125px')};

  ${media.tablet`
    padding-right: ${(props) => (props.imageRight ? '75px' : '25px')};
    padding-left: ${(props) => (props.imageRight ? '25px' : '75px')};
  `}

  ${media.phone`
    padding-right: 25px;
    padding-left: 25px;
  `}
`;

const Helper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
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
      {imageRight ? null : (
        <ImageHolder imageRight={imageRight}>

          <Image src={image} />
        </ImageHolder>
      )}
      <DescriptionContainer imageRight={imageRight}>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </DescriptionContainer>
      {imageRight ? (
        <ImageHolder imageRight={imageRight}>
          <Helper />
          <Image src={image} />
        </ImageHolder>
      ) : null}
    </WorkDetailContainerHolder>
  );
}

WorkDetailContainer.propTypes = propTypes;
WorkDetailContainer.defaultProps = defaultProps;

export default WorkDetailContainer;
