import image from "../assets/image.png"
import './CSS/About.css'

import { motion } from "framer-motion";

export default function About() {



  return (
    <div className="pages "  id="about">
        <h1 className="heading">ABOUT</h1>
    <motion.div
    initial={
     { x:-100}
    }
    transition={{
      duration:1
    }}
   
    whileInView={{
    x:0
    }}
    className="about" >
    <img src={image} alt="image" className="image"/>
    <div className="about-data text-light">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </div> 
    </motion.div>
      
    </div>
  )
}
