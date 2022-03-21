import React, { useEffect } from 'react'
import styled from 'styled-components'
import Nav from '../comps/Nav'
import Skills from '../comps/Skills'
import Card from '../comps/Card'
import Footer from '../comps/Footer'



const BodyCont = styled.div`
width:100%;
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

const MainCont = styled.div`
width:100%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin:20px;
padding:20px;
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


return(
 <>
 <Nav/>
 <BodyCont>
 <IntroName>Projects</IntroName>
    <MainCont>
       <Card title ={"BookLibrary"}  source = {"./Book.png"} description = {"Book search application developed by React"}></Card>
       <Card title ={"Moji Meal"} source = {"./Moji.png"} description = {"Food Infomation search application developed by React"} link ={"https://test-moji.vercel.app/"}></Card>
       <Card title ={"Fridge Savor"} source = {"./Fridge.png"} description = {"Recipe search application developed by React"}></Card>
       <Card title ={"MedOrDoc"} source = {"./Med.png"} link = {"https://medordociori.vercel.app/"} description = {"Booking for clinics application developed by React and React Native"}></Card>
       <Card title ={"Farily Delight"} source = {"./Candy.png"} description = {"Candy shop web page developed by Vanila HTML CSS Javascript"}></Card>
       <Card title ={"Scandinavia Hotel"}source = {"./Scandinavia.png"}description = {"Swedish Hotel website developed by Vanila HTML CSS Javascript"}></Card>
    </MainCont>
    <Footer></Footer>
 </BodyCont>     
 </>
)

}
export default portfolio;


