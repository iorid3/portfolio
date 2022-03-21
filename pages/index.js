import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Card from '../comps/Card'
import Nav from '../comps/Nav'
import Intro from '../comps/Intro'
import Footer from '../comps/Footer'

import config from 'react-reveal/globals';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

import { appdata } from '../data/appdata'
config({ ssrFadeout: true });

const BodyCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`

const MainCont = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color: #f7f2ee;
@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`
const HomeCont = styled.div`
width:100%;
height:20%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
background-color: #f7f2ee;
margin-top:60px;
margin-bottom:170px;
@media (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:30px;
  margin-bottom:50px;
}
`


class FadeExample extends React.Component {
  render(){

  return ( <>

   <Nav/> 

  <BodyCont>

    <MainCont>
      <Pulse>
        <HomeCont id = 'home'>
              <Intro/>
        </HomeCont>
      </Pulse> 

    </MainCont>

    <Footer></Footer>


   
  </BodyCont>

  </>
  )
}
}

export default FadeExample
