import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";


const CardCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:30%;
height:20%;
border:solid black 1px;
margin:20px;
border-radius:10px; 
`

const TextCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:40%;
margin:20px;
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
width:100%;
height:10%;
border-radius:10px; 
`

const Img = styled.img`
width:100%;
height:300px;
border-radius:10px;
mix-blend-mode: multiply;
@media (max-width: 767px) {
    width:80%;
    height:80%;
  }
`

const Button = styled.button`
width:20%;
height:40px;
border-radius:10px;
`
const Card =({
  title = "MedOrDoc",
  description = "Descriprion",
  link = "https://fridge-saver.vercel.app/",
  linkname = "Demo",
  source = "./demo.png"
})=>{
  const router = useRouter(); 
return(
    <CardCont>

        <ImgCont>
           <Img src = {source}/>
        </ImgCont>

        <TextCont>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <br></br>
            <Button onClick={() => router.push(link)}>{linkname}</Button>
        </TextCont>

    

    </CardCont>
)

}

export default Card;