import { useState } from 'react';
import Slider from 'react-slick';
import './Slider.css';
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs';
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/6.jpg";
import img4 from "./image/1.jpg";

const images = [img1,img2,img3,img4];


function SampleNextArrow({onClick}) {
  
  return ( 
   <div className='arrow arrow-right' onClick={onClick}>
    <BsArrowRight/>
   </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}


export default function Slider1() {

  const [slideIndex,setSlideIndex] = useState(0);

  const setting = {
    dots : true,
    infinite:true,
    speed:800,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:1500,
    beforeChange:(current,next)=>setSlideIndex(next),
    centerMode:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }; 

  return (
    <div className='container home'>
    <div>
      <div className='slider'>
        <Slider {...setting}>
          {
            images.map((img,index)=>(
              <div className={index === slideIndex ?'slide slide-active': 'slide'} key ={index}>
                <img src={img} alt=""/>
              </div>
             ))
          }
        </Slider>        
      </div>
      </div>
    </div>
  );
}


