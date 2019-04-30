import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'
import Form from '../components/form'

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

const Main = styled.p`
  font-size: 1rem;
`

const Social = styled.div`
  display: flex;
  flex-direction: row;
`

const Item = styled.div`
  margin: 5px;
`

export default () => (
  <Container>
    <JourneyIntro>
      <Main>
        Welcome to Cosmic Fisherman. My name is John Cornyn. I'm a React/React
        Native developer, problem solver and troubleshooter. I'll be adding more
        to this site soon. In the meantime, check out my Github, LinkedIn or
        send me a message in the form below.
      </Main>
      <Social>
        <Item>
          <SocialIcon url="https://twitter.com/johnmcornyn" />
        </Item>
        <Item>
          <SocialIcon url="https://www.linkedin.com/in/jmihc/" />
        </Item>
      </Social>
      <br />
      <Form />
    </JourneyIntro>
  </Container>
)
