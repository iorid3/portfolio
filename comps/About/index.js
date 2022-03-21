import React from 'react'
import styled from 'styled-components'


const IntroCont = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:100%;
margin-top:150px;
margin-bottom:100px;

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

const ImgCont = styled.div`
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

const Imgself =styled.img`
box-shadow: 15px 15px 0 #ea987e;
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


            <ImgCont>
              <Imgself src = {"/myself.jpg"} ></Imgself>
            </ImgCont>
            <TextCont>
                <IntroName>Iori  Takeshita</IntroName>
                <Title>Front-End Developer</Title>
        
        
                <p>Iori Takeshita from Japan, front end devloper and aspiring to be a full stack developer.
                   BCIT D3 Graduated in 2022. (hopefully).    
                   Cat Lover and often travel to the other countries. I have been to Sweden, the United States, the United Kingdom,
                   Vietnam, Germany, France, Ireland, Taiwan, Denmark.
                </p>
            </TextCont>
        
        </IntroCont>


    )
}

export default Intro;