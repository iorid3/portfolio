import React from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react";
import LottieFile from '/public/developer.json'


const IntroCont = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:100%;
margin-top:150px;
@media (max-width: 767px) {
    flex-direction:column;
    margin-top:30px;
  }
`

const TextCont  = styled.div`
display:flex;
flex-direction:column ;
width:50%;
height:50%;
@media (max-width: 767px) {
    width:300px;
    margin:9px;
  }
`

const LottieCont = styled.div`
display:flex;
flex-direction:column ;
width:50%;
height:50%;
max-width:300px;
margin:50px;
@media (max-width: 767px) {
    width:300px;
    margin:0px;
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

const Title = styled.p`
display:flex;
font-weight:bold;
font-size: 26px;
background-image: repeating-linear-gradient(-45deg, #e5c046 0px, #e5c046 2px, rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50%);
background-size: 8px 8px;
background-repeat: repeat-x;
background-position: center bottom;
`
const Intro = ({

})=>{

    return(
        <IntroCont>


            <LottieCont>
                <Lottie animationData={LottieFile} loop ={true}></Lottie>
            </LottieCont>
            <TextCont>
                <IntroName>Welcome !!</IntroName>
                <Title>Dear Visitors</Title>
        
                <br></br>
                <p> 
                  Would you like to know who Iori Takeshita is? Yes, You came to the right place!!
                  This web portfolio website will explain who he is. 
                  Thw ownder is BCIT D3 Program student who is originally from Japan.
                  As previous experiences,he had worked in Software company at his home country. 
                  He worked so hard to complete his task. When you work with him, you will know him more! 
                  If you want to know him more now, click "ABOUT" on the nav bar.
               </p>

            </TextCont>


        
        </IntroCont>
    )
}

export default Intro;