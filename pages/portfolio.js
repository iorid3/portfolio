import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Card from '../comps/Card'
import Nav from '../comps/Nav'
import Intro from '../comps/Intro'
import Footer from '../comps/Footer'
import Card from '../comps/Card'

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
margin:10px;
padding:10px;
flex-wrap:wrap;
flex-direction:row;
align-items:center;
justify-content:center;
background-color: #f7f2ee;
@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`

const IntroName = styled.p`
display:flex;
margin:10px;
font-weight:${(props) => props.fontweight};
-webkit-text-stroke: 3px #555;
text-shadow: 4px 4px 0 #e5c046;
color: rgba(0 0 0 / 0);
font-size: 100px;
font-weight: 700;
font-style: italic;
font-family: 'Montserrat', sans-serif;
margin:0px;
@media (max-width: 900px) {
    font-size: 50px;
  }
`


const portfolio =()=>{
  
  
  return ( <>
   <Nav/> 
  <BodyCont>
      <IntroName>Projects</IntroName>
    <MainCont>
             <Card source ={"./Book.png"} title={"Book Finder"} description ={"Book find app developed by React"}></Card>
             <Card source ={"./Moji.png"} title={"Moji Meal"} description ={"Food Information developed by React"}　link = "https://test-moji.vercel.app/"></Card>
             <Card source ={"./Med.png"} title={"MedOrDoc"} description ={"Booking App for a clinic developed by React and React Native"} link = "https://medordociori.vercel.app/"></Card>
             <Card source ={"./Fridge.png"}title={"Fridge Savor"} description ={"Recipe App developed by React"}></Card>
             <Card source ={"./Scandinavia.png"} title={"Scandinavian Hotel"} description ={"Hotel website developed by Vanila HTML CSS and JS"}></Card>
             <Card source ={"./Candy.png"} title={"Faily Delight"} description ={"Candy shop website developed by Vanila HTML CSS and JS"}></Card>
    </MainCont>

    <Footer></Footer>
  </BodyCont>

  </>
  )
}

export default portfolio
