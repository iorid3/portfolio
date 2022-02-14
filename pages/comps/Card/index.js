import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";



const CardCont = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:800px;
height:400px;
border:solid black 1px;
margin:15px;
border-radius:60% 60% 60% 60%;
background-color:#c7ffcd;

`

const TextCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:20%;
max-width:150px;
@media (max-width: 767px) {
    flex-direction:column;
    margin-top:30px;
  }
`

const Title  = styled.text`
font-size:40px;
margin:10px;
@media (max-width: 767px) {
    font-size:30px;
  }
`

const Description  = styled.text`
font-size:15px;
@media (max-width: 767px) {
    font-size:10px;
  }
`

const ImgCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:50%;
height:100px;
max-height:100px;

`

const Img = styled.img`
width:100%;
height:100%;
mix-blend-mode: multiply;
@media (max-width: 767px) {
    width:50px;
  }

`

const Card =({
 title = "MedOrDoc",
 description = "Descriprion",
 link = "https://fridge-saver.vercel.app/",
 linkname = "Click Me"
 
})=>{
  const router = useRouter(); 
return(
    <CardCont>
        <TextCont>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <br></br>
            <button onClick={() => router.push(link)}>{linkname}</button>
        </TextCont>

        <ImgCont>
           <Img src = './demo.png'/>
        
        </ImgCont>

    </CardCont>
)

}

export default Card;