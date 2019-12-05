import React from 'react';
import styled from 'styled-components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Card from '../components/Card';
import DeliverablesAndLanguages from '../components/work/DeliverablesAndLanguages';
import InvyteShowcase from '../images/showcase/invyte-app-showcase.png';
import ProjectDescription from '../components/work/ProjectDescription';
import WorkDetailContainer from '../components/work/WorkDetailContainer';
import MobileApplications from '../images/mobileApplications.svg';
import sourceCode from '../images/sourceCode.svg';
import serverStatus from '../images/serverStatus.svg';
import Link from '../components/Link';
import media from '../util/media';
import changeTheme from '../actions/theme';
import { invyteTheme } from '../theme';

const TopBar = styled.div`
  width: 100%;
  heigth: 100px;
`;

const BackArrow = styled.div`
  max-height: 150px;
  margin: 30px;
  vertical-align: middle;
`;

const Helper = styled.div`
  display: inline-block;
  height: 100%;
  float: left;
  vertical-align: middle;
`;

const Background = styled.div`
  width: 50%;
  position: absolute;
  z-index: 1;
  height: 1400px;
  background-color: ${(props) => props.theme.backgroundsecondarycolor}

  ${media.phone`
    display: none;
  `}
`;

const OuterContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1350px;
  margin: 0 auto;
  width: 80%;
`;

const TopImageCard = styled(Card)`
  display: block;
  margin: 0 auto;
  margin-top: 75px;
  width: 1000px;
  height: 700px;
  background-color: black;
  background-size: 100% 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;

  ${media.phone`
    display: none;
  `}

  ${media.tablet`
    width: 600px;
    height: 420px;
  `}
`;

const TopImageCardImage = styled.img`
  width: 100%;
  heigth: auto;
  box-shadow: 1px 1px 15px 5px rgba(134, 173, 245, 0.1);
  padding: 40 px;
  border-radius: 12px;
  display: block;
  margin: 0 auto;
  margin-top: 75px;
`;

const ColorSpan = styled.span`
  color: ${(props) => props.theme.maincolor}; 
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.maincolor}; 
`;

class Work extends React.Component {
  componentDidMount() {
    this.props.dispatch(changeTheme(invyteTheme));
  }

  render() {
    return (
      <div>
        <TopBar>
          <Helper />
          <StyledLink href="/">
            <BackArrow><FontAwesomeIcon icon={faArrowLeft} /></BackArrow>
          </StyledLink>
        </TopBar>
        <Background />
        <OuterContainer>
          <TopImageCardImage src={InvyteShowcase} />
          <DeliverablesAndLanguages
            deliverables={['iOS application', 'Android application', 'Back-end API', 'Website']}
            languages={['Swift', 'Kotlin', 'Python', 'Javascript (React)']}
          />
          <ProjectDescription
            title="Invyte"
            subtitle="A easy, stress-free way to share and manage event tickets"
            projectrole="Fullstack development & design"
          />
          <WorkDetailContainer imageRight={false} image={MobileApplications} title="Mobile applications">
            I have worked on designing and creating both the
            <ColorSpan> Android </ColorSpan>
            and the
            <ColorSpan> iOS </ColorSpan>
            Because Invyte doesn&apos;t have a web application, these mobile apps were our main focus.
          </WorkDetailContainer>
          <WorkDetailContainer imageRight image={sourceCode} title="Back-end">
            I helped creating the backend, a
            <ColorSpan> RESTfull API </ColorSpan>
            with Python. The backend includes some some complex functionalities such as reading data from pdf tickets.
          </WorkDetailContainer>
          <WorkDetailContainer imageRight={false} image={serverStatus} title="Infrastructure">
            The whole infrastructre runs on Google Cloud Platform and is setup with
            <ColorSpan> Docker </ColorSpan>
            and
            <ColorSpan> Kubernetes</ColorSpan>
          </WorkDetailContainer>
        </OuterContainer>
      </div>
    );
  }
}

export default connect()(Work);
