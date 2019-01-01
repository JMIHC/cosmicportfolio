import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
  margin: 1rem auto;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const JourneyIntro = styled.div`
  width: 300px;
  flex: 1 auto;
  margin: 20px;
`

const Intro = styled.p`
  font-size: 1.4rem;
`

const ContactWrapper = styled.div`
  max-width: 100px;
  margin-right: 20px;
`

const ContactItem = styled.div`
  margin-top: 20px;
  @media (max-width: 400px) {
    display:flex
  }
`

export default () => (
    <Container>
      <JourneyIntro>
        <Intro>
        Welcome to the Cosmic Fisherman. I'm John Cornyn, a developer, problem solver and troubleshooter.
        During the day I build for the web and mobile using React. By nights and weeekends I imbibe the <a href='https://www.gatsbyjs.org/'>Gatsby.js</a> framework and all things
        pertaining to progressive web applications.
        </Intro>
      </JourneyIntro>
      <ContactWrapper>
        <ContactItem>
        <SocialIcon url="https://twitter.com/johnmihdicornyn"/>
        </ContactItem>
        <ContactItem>
        <SocialIcon url="https://www.linkedin.com/in/jmihc/"/>
        </ContactItem>
      </ContactWrapper>
    </Container>
)

