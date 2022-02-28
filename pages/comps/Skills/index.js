import React from 'react'
import styled from 'styled-components'


const BigCont = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`


const SkillCont = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
background-color:${(props)=>props.bgcolor};
width:110%;
height:300px;
border:solid black 1px;
margin:40px;
border-radius: 30%
}
@media (max-width: 767px) {
    align-item: center;
  }
  &:hover {
    border-width: 0 0 0.5px;
    border-style: solid;
    font-weight: bold;
    color:black;
    box-shadow: 0 5px 10px black;
    transform: translate(0, -5px);
  }  
`

const TextCont = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:200px;
height:100px;
max-width:150px;
`
const ImgCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:150px;
height:100px;
max-height:100px;
`

const Img = styled.img`
width: 150px;
height:150px;
margin-left:15px;
`


const Skills =({
bgcolor = "#C0DDBE",
imgsrc ="/coding.png",
lists =['HTML','CSS','Javascript','React','React Native']
})=>{
 return(

<BigCont>

    
    <SkillCont bgcolor={bgcolor}>
    
            <ImgCont>
                <Img src = {imgsrc}/>
            </ImgCont>    
            <TextCont>
                <ul>
                    <li>{lists[0]}</li>
                    <li>{lists[1]}</li>
                    <li>{lists[2]}</li>
                    <li>{lists[3]}</li>
                    <li>{lists[4]}</li>
                </ul>
            </TextCont>
      
    </SkillCont>

</BigCont>

 )    


}

export default Skills;