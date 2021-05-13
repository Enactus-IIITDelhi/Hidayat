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

        <BlogCard values={blogs[0]} />
        <BlogCard values={blogs[1]} />
        <BlogCard values={blogs[2]} />
      </Carousel>
    </div>
  );
}

function BlogCard({values}) {
  return (
    <div>
    <div className="container-fluid row pl-3 pr-3">
      <div className="col-xs-12 col-sm-5 d-flex">
          <img className="d-flex m-auto" src={values.imagePath} alt="blog card" width="80%"></img>
      </div>
      
      <div className="col-xs-12 col-sm-7 pt-3 pb-3">
        <h3 className="text-main-blue pt-lg-5 pt-3">
            {values.title} 
        </h3>
        <h5> - {values.author}, {values.authorDesignation}</h5>
        <p>
            {values.plot}
        </p>
        <Link to={`/blog/${values.link}`}>
        <Button className="bg-main-blue pl-3 pr-3" style={ {borderRadius:"30px", border:"0px"}} size="lg" >Read More </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;