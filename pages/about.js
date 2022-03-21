import React, { useEffect } from 'react'
import styled from 'styled-components'
// import Card from '../comps/Card'
import Nav from '../comps/Nav'
import About from '../comps/About'
import Footer from '../comps/Footer'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Skills from  '../comps/Skills'
import ReactDOM from "react-dom";



// import { useAnimation, motion, useElementScroll} from "framer-motion";

import { appdata } from '../data/appdata'

const BodyCont = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
@media (max-width: 768px) {
  align-items:center;
  justify-content:center;
}
`

const MainCont = styled.div`
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
const HomeCont = styled.div`
width:100%;
height:20%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
background-color: #f7f2ee;
margin-top:60px;
margin-bottom:170px;
@media (max-width: 768px) {
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:30px;
  margin-bottom:50px;
}

.embla {
  width:50%;
  overflow: hidden;
}
.embla__container {
  display: flex;
  width:30%;
}
.embla__slide {
  position: relative;
  flex: 0 0 100%;
}
`


const Title = styled.p`
display:flex;
font-weight:bold;
padding: 0 0.05em 10px;
font-size: 26px;
margin:50px;
background-image: repeating-linear-gradient(-45deg, #e5c046 0px, #e5c046 2px, rgba(0 0 0 / 0) 0%, rgba(0 0 0 / 0) 50%);
background-size: 8px 8px;
background-repeat: repeat-x;
background-position: center bottom;
`

const about=()=>{
  

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  // useEffect(() => {
  //   if (emblaApi) {
  //     // Embla API is ready
  //   }
  // }, [emblaApi])
  return ( <>

   <Nav/> 

  <BodyCont>
    <MainCont>
      <About/>
      <Title>Skills</Title>
      <h4>These skills would be updated and improved everyday!</h4>
      <HomeCont>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img width="200px" height = "200px" src = './html.png'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './css.png'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './javascript.png'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './php.png'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './nodejs.svg'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './next.png'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './React.png'/></div>
        </div>
      </div>
      </HomeCont>

      <Title>Hobby</Title>
      <h4>As I mentioned above, I like traveling. Aftert this pandemic ends, I hope I can travel again</h4>
     <HomeCont>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide"><img width="200px" height = "200px" src = './travel1.JPG'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './travel2.JPG'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './travel3.JPG'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './food1.JPG'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './food2.JPG'/></div>
          <div className="embla__slide"><img width="200px" height = "200px" src = './food3.JPG'/></div>
        </div>
      </div>



     </HomeCont>



    </MainCont>
  </BodyCont>
  <Footer/>

  </>
  )
}
export default about;
