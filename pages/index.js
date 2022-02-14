import React, { useRef , useEffect } from 'react'
import styled from 'styled-components'
import Card from './comps/Card'
import Nav from './comps/Nav'
import Intro from './comps/Intro'
import Skills from './comps/Skills'
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

// import { useAnimation, motion, useElementScroll} from "framer-motion";

import { appdata } from '../data/appdata'
config({ ssrFadeout: true });

const BodyCont = styled.div`
width:100%;
display:flex;
background-color: #f7f2ee;
align-items:center;
justify-content:center;
@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`

// const NavCont = styled.div`
// width:100%;
// display:flex;
// position:fixed;
// `

const MainCont = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color: #f7f2ee;
margin-bottom:80px;
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
margin-bottom:80px;
@media (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;

}
`



const SkillCont = styled.div`
width:100%;
hegiht:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
background-color: #fae6a5;
padding:40px;
margin-bottom:80px;
border-radius:20px;
@media (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
`


const PortCont = styled.div`
width:100%;
hegiht:100%;
display:flex;
padding:120px;
border-radius:20px;
flex-direction:column;
align-items:center;
justify-content:center;
background-color: #fae6a5;
@media (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
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
       
       
       <Slide bottom big>
         <h1>Skill</h1>
          <SkillCont id = 'skill' >
            <Skills/>
            <Skills imgsrc ={"/db.png"} bgcolor = "#FFBBBB" lists = {["PHP","MySQL","Firebase","mongodb",'Node.js']}/>
            <Skills imgsrc ={"/web-design.png"} bgcolor = "#EEEDCD" lists = {["Figma","Photoshop","AfterEffect","Illustorator",'XD']}/>
          </SkillCont>
         </Slide> 
 


      <Slide bottom big style ="width:100%">
        <PortCont id = 'portfolio'>
              <h1>Portfolio</h1>
              <Card title={appdata.title.first} description={appdata.description.first}/>
              <Card title={appdata.title.second} description={appdata.description.second} link ={"https://medordociori.vercel.app/"} linkname ={"https://medordociori.vercel.app/"}/>
        </PortCont>
      </Slide> 

{/* 
    <AnimeCont>
      <motion.div className='test' whileHover={{ scale: 2.5 }} whileTap={{ scale: 0.8 }} />
    </AnimeCont> */}
    </MainCont>


   
  </BodyCont>

  </>
  )
}
}

export default FadeExample
