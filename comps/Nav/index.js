import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from "next/router";


const NavCont = styled.div`
display:flex;
flex-direction:row;
align-items:flex-end;
justify-content:flex-end;
width:100%;
height:60px;
background-color:#C6A8CB;
@media (max-width: 767px) {
  align-items: center;
  justify-content:flex-end;
}
`
const NavLink = styled.p`
display: flex;
margin-right: 60px;
@media (max-width: 767px) {
  align-item: center;
  margin-right:10px;
  font-size:15px;
}
&:hover {
    border-width: 0 0 0.5px;
    border-style: solid;
    font-weight: bold;
    color: ${(props) => props.bgHover};
  }
`


const Nav =({
     bgHover = "#5D5D5D",
})=>{

    const router = useRouter(); 
    return (
      <NavCont>
          <NavLink bg={bgHover} onClick={() => router.push('/')}>HOME</NavLink>
          <NavLink bg={bgHover} onClick={() => router.push('/about')}>ABOUT</NavLink>
          <NavLink bg={bgHover} onClick={() => router.push('/portfolio')}>PORTFOLIO</NavLink>
      </NavCont>
    )
}

export default Nav;