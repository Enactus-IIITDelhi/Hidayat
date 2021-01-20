import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText, Button} from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import blogs from './blogs';

function Banner()
{
  return(
    <div className="container-fluid bg-soft-grey ">
      <div className="row m-auto ">
        <div className="col-12">
          <BlogsCarousel />
        </div>
      </div>
    </div>
    );
}

function BlogsCarousel(props) {
  return (
    <Carousel
      slidesPerPage={1}
      centered
      arrows
      infinite
      autoPlay={4000}
      animationSpeed={1500}>

      <BlogCard storyNo="1" image={blogs[0].imagePath} title={blogs[0].title} plot={blogs[0].detailedPlot}/>
      <BlogCard storyNo="2" image={blogs[1].imagePath} title={blogs[1].title} plot={blogs[1].detailedPlot}/>
      <BlogCard storyNo="3" image={blogs[2].imagePath} title={blogs[2].title} plot={blogs[2].detailedPlot}/>
    </Carousel>
  );
}

function BlogCard(props) {
  return (
    <div className="row mr-5">
        <div className="col-lg-5 ">
            <img className="pull-right" src={props.image} width="80%"></img>
        </div>
        <div className="col-lg-7 ">
        <h2 className="text-main-blue pt-5">
           {props.title} 
        </h2>
        <p>
            {props.plot}
        </p>
        <Button className="bg-main-blue pl-3 pr-3 pull-right" style={ {borderRadius:"30px"}} size="lg" >Read More </Button>

        </div>

    </div>
  );
}

export default Banner;