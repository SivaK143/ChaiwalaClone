
import "./Styles/App.scss"
import Intro from './Components/Intro'
import Info from './Components/Info'
import "./Styles/intro.scss"
import "./Styles/header.scss"
import Header from './Components/Header'
import freshTopicImg from "./Assets/academy.png"
import freshTopic2Img from "./Assets/story.png"
import tedTalksImg from "./Assets/in-the-news.gif"
import franchiseImg from "./Assets/franchise.gif"
import mapImg from "./Assets/locations.png"
import coursesImg from "./Assets/image2.png"
import albumImg from "./Assets/mba-cares.gif"
import baratImg from "./Assets/image1.png"
import chaiwalaImg from "./Assets/image3.png"
import Footer from './Components/Footer'
import "./Styles/footer.scss"
import "./Styles/info.scss"
import data from "./data/data.json"
import "./Styles/mediaQuery.scss"
import { useEffect } from 'react'

function App() {

//   $yellow : #fff100;
// $pink : #ed1e79;
// $red : #d20120;
// $white : #fff;
// $brown : #6d3d0f;

const yellow = "#fff100" , pink = "#ed1e79",  white = "#fff" , brown = "#6d3d0f";

//destructuring the data

const {freshTopic, freshTopic2 , tedTalks, franchise, map, courses, album, barat, chaiwala} = data;

const dotCursor = (e)=>{
  const cursor = document.querySelector(".cursor");
  cursor.style.top = `${e.pageY - 11}px`;
  cursor.style.left = `${e.pageX -11}px`;

  const element = e.target;

if(element.getAttribute("data-cursorpointer")){
  cursor.classList.add("cursorHover");
}else if(element.getAttribute("data-cursorpointermini")){
  cursor.classList.add("cursorMini");
}

else{
  cursor.classList.remove("cursorHover");
  cursor.classList.remove("cursorMini");

}

  

}

useEffect(()=>{
  window.addEventListener("mousemove",dotCursor)

  return ()=>{
    window.removeEventListener("mousemove", dotCursor);
  }
})

  return (
    <>
     <Intro/>

     {/* Freshtopic */}
     <Header 
     h3={freshTopic.heading}
      text={freshTopic.text} 
      btnTxt={freshTopic.btn} 
      imgSrc={freshTopicImg}
      backgroundColor ={pink}
      headingColor ={yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
      btnColor = {pink}
      
      />

{/* freshTopic2 */}

<Header 
     h3={freshTopic2.heading}
      text={freshTopic2.text} 
      btnTxt={freshTopic2.btn} 
      imgSrc={freshTopic2Img}
      backgroundColor ={pink}
      headingColor ={yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
      btnColor = {pink}
      
      />

      {/* tedTalks */}

<Header 
     h3={tedTalks.heading}
      text={tedTalks.text} 
      btnTxt={tedTalks.btn} 
      imgSrc={tedTalksImg}
      backgroundColor ={yellow}
      headingColor ={pink}
      textColor = {pink}
      btnBgColor = {pink}
      btnColor = {yellow}
      
      />

      {/* franchise */}

    <Header 
     h3={franchise.heading}
      text={franchise.text} 
      btnTxt={franchise.btn} 
      imgSrc={franchiseImg}
      backgroundColor ={white}
      headingColor ={pink}
      textColor = {brown}
      btnBgColor = {brown}
      btnColor = {yellow}
      
      />

      {/* map */}

    <Header 
     h3={map.heading}
      text={map.text} 
      //no button so no text should be passed
      imgSrc={mapImg}
      backgroundColor ={pink}
      headingColor ={yellow}
      textColor = {yellow}
      btnBgColor = {brown}
      btnColor = {yellow}
      hasBtn = {false}
      />

      {/* courses */}

    <Header 
     h3={courses.heading}
      text={courses.text} 
      btnTxt={courses.btn}
      imgSrc={coursesImg}
      imgSize='30%'
      backgroundColor ={yellow}
      headingColor ={pink}
      textColor = {pink}
      btnBgColor = {pink}
      btnColor = {yellow}
      />

      
      {/* Album */}

    <Header 
     h3={album.heading}
      text={album.text} 
      btnTxt={album.btn}
      imgSrc={albumImg}
      backgroundColor ={white}
      headingColor ={pink}
      textColor = {brown}
      btnBgColor = {brown}
      btnColor = {yellow}
      />

      
      {/* barat */}

    <Header 
     h3={chaiwala.heading}
      text={chaiwala.text} 
      btnTxt={chaiwala.btn}
      imgSrc={baratImg}
      backgroundColor ={pink}
      headingColor ={yellow}
      textColor = {yellow}
      btnBgColor = {yellow}
      btnColor = {pink}
      />

{/* Chaiwala */}
<Header 
     h3={chaiwala.heading}
      text={chaiwala.text} 
      btnTxt={chaiwala.btn}
      imgSrc={chaiwalaImg}
      backgroundColor ={white}
      headingColor ={pink}
      textColor = {brown}
      btnBgColor = {brown}
      btnColor = {yellow}
      />

      <Footer />

      <Info />

    </>
  )
}

export default App
