
import styled from 'styled-components'
import Card from './comps/Card'
import Nav from './comps/Nav'
import Intro from './comps/Intro'
import Skills from './comps/Skills'
import React from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <Fade left>
          <Nav></Nav>  
          <Intro/>
          <Skills></Skills>
          <Skills></Skills>
          <Skills></Skills>
          <Card></Card>
          <h1>React Reveal</h1>
          <h1>React Reveal</h1>
          <h1>React Reveal</h1>
        </Fade>
      </div>
    );
  }
}

export default FadeExample;