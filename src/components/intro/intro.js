import '../../App.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import firstImg from './Metrics-rafiki.png'
// import secondImg from './SEO-analytics-team-rafiki.png'
// import thirdImg from './tech-company-rafiki.png'
import carousel1 from '../../assets/carousel1.svg'
import carousel2 from '../../assets/carousel2.svg'
import carousel3 from '../../assets/carousel3.svg'


const Intro = () =>{
  return (
    <Carousel className='carousal-item' 
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={false}
      showArrows={false}
      centerMode={false}
      showStatus={false}
      width={'75%'}
      transitionTime={0}
      dynamicHeight = {true}
    >
      <div className='c-div'>
        <img src={carousel1} className='info-img' style={{width:"100%",height:"80%"}}/>
      </div>
      <div className='c-div'>
        <img src={carousel2} className='info-img' style={{width:"100%",height:"80%"}}/>
      </div>
      <div className='c-div'>
        <img src={carousel3} className='info-img'style={{width:"100%",height:"80%"}}/>
      </div>
    </Carousel>
  );
}
export default Intro
