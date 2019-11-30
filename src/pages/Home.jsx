import React from 'react';
import styled from 'styled-components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../components/SearchBar';
import OutlinedButton from '../components/Buttons/OutlinedButton';
import Card from '../components/Card';
import Button from '../components/Buttons/Button';


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
`;

const ProfilePictureHolder = styled.div`
  padding: 20px;
  grid-column: 3;
`;

const PhotoCard = styled(Card)`
  height: 250px;
  width: 250px;
  margin-bottom: 20px;
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
                co-founded his company Code R together with his buddy from school. Later
                they also founded Invyte, a ticket management mobile app.
            </p>
            <p>
              He is also interested in cyber security and loves to spend his spare time
              hacking CTF machines
            </p>
            <OutlinedButton>See his work</OutlinedButton>
          </DescriptionBox>
          <ProfilePictureHolder>
            <PhotoCard />
            <Button icon={faEnvelope}>Contact</Button>
          </ProfilePictureHolder>
        </DescriptionHolder>
      </Content>
    </OuterContainer>
  );
}

export default Home;
