import React from 'react';
import {Button} from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import blogs from './blogs';
import { Link } from 'react-router-dom';

function Banner(props) {
  return (
    <div className="container-fluid mb-5 bg-soft-grey">
      <Carousel
        slidesPerPage={1}
        centered
        arrows
        infinite
        autoPlay={6000}
        animationSpeed={1500}
        breakpoints={{
          768: {
            arrows: false
          }
        }}
        >

        <BlogCard storyNo="1" image={blogs[0].imagePath} title={blogs[0].title} plot={blogs[0].detailedPlot} link={blogs[0].link}/>
        <BlogCard storyNo="2" image={blogs[1].imagePath} title={blogs[1].title} plot={blogs[1].detailedPlot} link={blogs[1].link} />
        <BlogCard storyNo="3" image={blogs[2].imagePath} title={blogs[2].title} plot={blogs[2].detailedPlot} link={blogs[2].link} />
      </Carousel>
    </div>
  );
}

function BlogCard(props) {
  return (
    <div>
    <div className="container-fluid row pl-3 pr-3">
      <div className="col-xs-12 col-sm-5 d-flex">
          <img className="d-flex m-auto" src={props.image} alt="blog card" width="80%"></img>
      </div>
      
      <div className="col-xs-12 col-sm-7 pt-3 pb-3">
        <h3 className="text-main-blue pt-lg-5 pt-3">
            {props.title} 
        </h3>
        <p>
            {props.plot}
        </p>
        <Link to={`/blog/${props.link}`}>
        <Button className="bg-main-blue pl-3 pr-3" style={ {borderRadius:"30px", border:"0px"}} size="lg" >Read More </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;