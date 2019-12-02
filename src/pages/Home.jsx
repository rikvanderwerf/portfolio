import React from 'react';
import styled from 'styled-components';
import { faEnvelope, faDesktop, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import OutlinedButton from '../components/buttons/OutlinedButton';
import Card from '../components/Card';
import Button from '../components/buttons/Button';
import ExperienceContainer from '../components/experience/ExperienceContainer';
import ExperienceItem from '../components/experience/ExperienceItem';
import SkillsContainer from '../components/SkillsContainer';
import Photo from '../images/rik.jpeg';
import Link from '../components/Link';

const OuterContainer = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  width: 80%;
`;

const Content = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  padding: 100px 0px;
`;

const Header = styled.div`
  height: 100px;
  width: 100%;
`;

const DescriptionHolder = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 60% 10% 30%;
`;

const DescriptionBox = styled.div`
  padding: 20px;
  grid-column: 1;
`;

const Title = styled.p`
  font-family: Vollkorn;
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.titlecolor};
`;

const ProfilePictureHolder = styled.div`
  padding: 20px; 
  grid-column: 3;
`;

const PhotoCard = styled(Card)`
  height: 250px;
  width: 250px;
  background-size: 100% 100%;
  margin-bottom: 20px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;

const ColorSpan = styled.span`
  color: ${(props) => props.theme.maincolor}; 
`;

function Home(props) {
  return (
    <OuterContainer>
      <Content>
        <Header>
          <SearchBar>Rik van der Werf</SearchBar>
        </Header>
        <DescriptionHolder>
          <DescriptionBox>
            <Title>Full-stack developer and tech lover. </Title>
            <p>
                Rik found out he loved programming when his physics teacher showed him
                a game he build in Pascal. After he finished his Computer Science study he
                co-founded his company
              {' '}
              <ColorSpan>Code R</ColorSpan>
              {' '}
              together with his buddy from school. Later they also started
              {' '}
              <ColorSpan>Invyte</ColorSpan>
              , a ticket management mobile app.
            </p>
            <p>
              He is also interested in cyber security and loves to spend his spare time
              hacking CTF machines
            </p>
            <Link href="/work"><OutlinedButton href="/work">See his work</OutlinedButton></Link>
          </DescriptionBox>
          <ProfilePictureHolder>
            <PhotoCard image={Photo} />
            <Button icon={faEnvelope} href="mailto:hendrik.werf@gmail.com?Subject=Hello">Contact</Button>
          </ProfilePictureHolder>
        </DescriptionHolder>
        <SkillsContainer />
        <ExperienceContainer>
          <ExperienceItem icon={faDesktop} company="Code R" date="August 2017 - present">Full-stack Developer & Co-founder</ExperienceItem>
          <ExperienceItem icon={faDesktop} company="Invyte" date="Februari 2017 - present">Full-stack Developer & Co-founder</ExperienceItem>
          <ExperienceItem icon={faUserGraduate} company="ICT Group" date="Februari 2017 - June 2017">Gradution Intern</ExperienceItem>
          <ExperienceItem line={false} icon={faDesktop} company="Label A" date="September 2015 - May 2016">Back-end developer</ExperienceItem>
        </ExperienceContainer>
      </Content>
    </OuterContainer>
  );
}

export default Home;
