import React, { useState } from "react";
import data from "./Data/ProjectsData";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import image from "../assets/image.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import './CSS/Projects.css'
const Projects = () => {
    const items = data;
    
  return (
    <div className="pages projects" id="projects">

    <h2 className="heading">Projects</h2>

    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >


 {
    items.map((elem)=>{
        const {name,builder,desc,github} = elem;
 return (<SwiperSlide>

<h2 className="project-heading text-light">{name}</h2>
<div className="tech">
    <div className="build-with text-yellow font-light">Build With</div>
    <div className="stack">

     {
         builder.map((lang)=>{

             return <img src={lang} alt="image"/>
         })
     }


    </div>
</div>

<div className="pd">
    <div className="desc-hl text-yellow">Description</div>
    <div className="pdb text-light">{desc}</div>
</div>

<div className="gh-btn ">
    <a href={github} className=" btn bg-yellow">Visit</a>
</div>

  
</SwiperSlide>
 )
    })
 }
  
   
  </Swiper>
      
    </div>
  )
}


export default Projects;


// <SwiperSlide>

// <h2 className="project-heading text-light">Web App</h2>
// <div className="tech">
//     <div className="build-with text-yellow font-light">Build With</div>
//     <div className="stack">
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     </div>
// </div>

// <div className="pd">
//     <div className="desc-hl text-yellow">Description</div>
//     <div className="pdb text-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//     content here',</div>
// </div>

// <div className="gh-btn ">
//     <a href="#" className=" btn bg-yellow">Github Code</a>
// </div>

  
// </SwiperSlide>
// <SwiperSlide>

// <h2 className="project-heading text-light">Web App</h2>
// <div className="tech">
//     <div className="build-with text-yellow font-light">Build With</div>
//     <div className="stack">
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     </div>
// </div>

// <div className="pd">
//     <div className="desc-hl text-yellow">Description</div>
//     <div className="pdb text-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//     content here',</div>
// </div>

// <div className="gh-btn ">
//     <a href="#" className=" btn bg-yellow">Github Code</a>
// </div>

  
// </SwiperSlide>
// <SwiperSlide>

// <h2 className="project-heading text-light">Web App</h2>
// <div className="tech">
//     <div className="build-with text-yellow font-light">Build With</div>
//     <div className="stack">
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     <img src={image}/>
//     </div>
// </div>

// <div className="pd">
//     <div className="desc-hl text-yellow">Description</div>
//     <div className="pdb text-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
//     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
//     content here',</div>
// </div>

// <div className="gh-btn ">
//     <a href="#" className=" btn bg-yellow">Github Code</a>
// </div>

  
// </SwiperSlide>
