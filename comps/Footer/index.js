import React from 'react'
import styled from 'styled-components'
import { useRouter } from "next/router";


const BigCont = styled.div`
display:flex;
flex-direction:row;
width:100%;
height:30%;
justify-content:center;
align-items:center;
background-color:#C9C9C9
`

const Cont1 = styled.div`
display:flex;
flex-direction:row;
width:33%;
height:10%;
justify-content:center;
align-items:center;
background-color:#C9C9C9
`

const Cont2 = styled.div`
display:flex;
flex-direction:column;
width:33%;
height:10%;
justify-content:center;
align-items:center;
background-color:#C9C9C9
`
const Cont3 = styled.div`
display:flex;
flex-direction:column;
width:33%;
height:10%;
justify-content:flex-end;
background-color:#C9C9C9
`

const ImgCont = styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start
width:50%;
height:10%;
`
const ContactCont = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
width:50%;
height:10%;
`

const Img = styled.img`
width:50px;
height:50px;
margin:10px;
display:flex;

`

const Footer =({
})=>{

const router = useRouter(); 
 return(

<BigCont>
    <Cont1>


    </Cont1>
    <Cont2>
    <p>Copy Right Reserved@Iori Takeshita</p>
    <p>takeshitaiori@gmail.com</p>
     <ImgCont>
            <Img src = './insta.png' onClick={() => router.push("https://www.instagram.com/silentstrongvoice/")}/>
            <Img src = './linkedin.png' onClick={() => router.push("https://www.linkedin.com/in/iori-takeshita-6b8b63229//")}/>
            <Img src = './github.png' onClick={() => router.push("https://github.com/iorid3")}/>
     </ImgCont> 
    


    </Cont2>
    <Cont3>
       {/* <ContactCont>
        <ul>
            <li>Contact Info</li>
            <li>takeshitaiori@gmail.com</li>    
        </ul>
       </ContactCont> */}
    </Cont3>
</BigCont>

 )   
}

export default Footer;