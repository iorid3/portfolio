import React from 'react'
import styled from 'styled-components'
import Lottie from "lottie-react";
import LottieFile from '../../../public/developer.json'


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
@media (max-width: 767px) {
    font-size: 50px;
  }
`

const Title = styled.p`
display:flex;
font-weight:bold;
padding: 0 0.05em 10px;
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
                <IntroName>Iori  Takeshita</IntroName>
                <Title>Front-End Developer</Title>
        
                <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus congue nisl et lorem auctor, at sodales sem sollicitudin. 
                    Mauris dapibus nibh ac porttitor pellentesque. Class aptent taciti sociosqu 
                    conubia nostra, per inceptos himenaeos. 
                    Pellentesque ut viverra purus. Nam congue arcu quis lacu
                    Praesent dignissim nec massa ut laoreet. Maecenas placerat dolor dui, ac sodales lacus rutrum sit amet. Nunc ac orci quam. 
                    Ut et ultrices risus. Suspendisse eu mauris est. Quisque vehicula, dolor non convallis mollis, 
                    dolor lectus molestie tortor, eu rhoncus dui elit et enim
                    Integer convallis at quam at fermentum. </p>
            </TextCont>
        
        </IntroCont>
    )
}

export default Intro;