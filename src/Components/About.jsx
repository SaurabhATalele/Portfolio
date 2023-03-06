import image from "../assets/image.png"
import './CSS/About.css'

import { motion } from "framer-motion";

export default function About() {



  return (
    <div className="pages "  id="about">
        <h1 className="heading">ABOUT</h1>
    <motion.div
    initial={
     { scale:0.4}
    }
    transition={{
      duration:1
    }}
   
    whileInView={{
scale:1
    }}
    className="about" >
    <img src={image} alt="image" className="image"/>
    <div className="about-data text-light">
      I am a Third year student at G. H. Raisoni Institute of Engineering and Technology in the Information Technolog Department. I have 
      been learning Python and have a hands on experience of 3 years in it. I have been working on full stack development since last 6 months.
      I have a 1 year of hands on experience of React Js development with 3 mini projects on it.
      I also have been learning and solving DSA problems and have solved around 300 problems across various platforms.
   </div> 
    </motion.div>
      
    </div>
  )
}
