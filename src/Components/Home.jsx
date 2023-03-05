import TypeWriter from "./Typewriter";
import image from "../assets/image.png";
import './CSS/Home.css'
import { useEffect } from "react";

import {motion} from 'framer-motion'

export default function Home() {

  useEffect(() => {
    fetch("/api",{cors:"no-cors"})
      .then((res) => res.json())
      .then((data)=>console.log(data.message));
     
  }, []);


  return (
    <div className="pages" id="home">
    
  <div className="content">

  <div className="top">
  <motion.div 
  initial={{y:200,scale:0}}
  animate={{y:0,scale:1}}
  transition={{type:"spring",duration:2}}
  className="left">

    
  
        <h1 className="name-heading text-light">SAURABH TALELE</h1>
        <p className="intro text-light">Software Developer</p>
        
        <div className="type-writer d-flex">
        <h2 className="text-light">Building</h2>
        <h2 className="text-orange">
        <TypeWriter/>
        </h2>
        
        </div>
        
    </motion.div>
    <motion.div className="right"
    initial={{x:200}}
    animate={{x:[50,-100,0]}}
    transition={{duration:1.5,type:"spring"}}
    >
        
    <img src={image} alt="image" className="avatar image-av"/>
    <div className="circle"> </div>
    <div className="circle" > </div>
        <div className="circle" > </div>
        </motion.div>
        </div>

        <motion.div
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration:1}}        
        className="bottom">

        <h3 className="text-yellow">SKILLS</h3>

        <div className="items">

        <div className="item">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"/>
        
        </div>
        <div className="item">
        <div className="overlay"/>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png'/>
        </div>
        <div className="item">
        <div className="overlay"/>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
        </div>
        <div className="item">
        <div className="overlay"/>

        <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/>
        </div>
        <div className="item">
        <div className="overlay"/>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'/>
        </div>

        <div className="item">
        <div className="overlay"/>

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'/>
        </div>
        </div>
        
        </motion.div>

    



  </div>



    </div>
  )
}
