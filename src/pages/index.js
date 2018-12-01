import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
  margin: 1rem auto;
  max-width: 600px;
  display: flex;
  flexDirection: column;
  flex-wrap: wrap;
  justify-content: center;
`
const JourneyIntro = styled.div`
  width: 300px;
  flex: 1 auto;
  margin: 20px;
`

const ContactWrapper = styled.div`
  max-width: 100px;
`

const ContactItem = styled.div`
  margin-top: 20px;
`

export default () => (
    <Container>
      <JourneyIntro>
        <p>
        Welcome to the Cosmic Fisherman. I'm John Mihdi Cornyn, a developer, problem solver and troubleshooter.
        During the day I build web sites and mobile apps in React and React Native.
        By nights and weeekends I imbibe the <a href='https://www.gatsbyjs.org/'>Gatsby.js</a> framework
        and mine for the gems of understanding <a href='https://reasonml.github.io/'>ReasonML</a>.
        </p>
        <p>Contact</p>
      </JourneyIntro>
      <ContactWrapper>
        <ContactItem>
        <SocialIcon url="https://twitter.com/johnmihdicornyn"/>
        </ContactItem>
        <ContactItem>
        <SocialIcon url="https://www.linkedin.com/in/jmihc/"/>
        </ContactItem>
        <ContactItem>
        <SocialIcon color="black" url="https://www.github.com/jmihc/"/>
        </ContactItem>
      </ContactWrapper>
    </Container>
)

