import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText, Button} from 'reactstrap';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Blog()
{

  return(
    <div className="container-fluid pt-5 pb-2 bg-soft-grey ">
      <div className="row m-auto ">
          <div className="col-11 offset-1 col-md-5 p-0">
          </div>
          <div className="col-10 offset-1 offset-md-0 col-md-5  p-0" >
            <h2 className="text-main-blue m-0 p-0 text-right" >Blogs.</h2>
            <hr className="ruler pull-right m-0 mt-2" />
          </div>
          <div className="col-sm-1"></div>
        </div>
      <div className="row m-auto ">
        <div className="col-12 col-md-10 offset-md-1">
          <BlogsCarousel />
        </div>
      </div>
    </div>
    );
}

function BlogsCarousel(props) {
  return (
    <Carousel
      slidesPerPage={3}
      centered
      arrows
      infinite
      autoPlay={4000}
      animationSpeed={1500}
      breakpoints={{
        576: {
          slidesPerPage: 1,
          arrows: false,
        },
        1200: {
          slidesPerPage: 2,
          arrows: true,
        }

      }}>

      <BlogCard storyNo="1" />
      <BlogCard storyNo="2" />
      <BlogCard storyNo="3" />
      <BlogCard storyNo="4" />

    </Carousel>
  );
}

function BlogCard(props) {
  return (
    <div className="pl-md-2 pr-md-2 pt-5 pb-5 ml-1 mr-1">
      <Card className="border border-dark">
        <CardImg className="border-bottom border-dark" top width="100%" src="assets/HomePage/dummy.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="h3">Story {props.storyNo}</CardTitle>
          <CardText>
            Nisi proident adipisicing nisi velit dolor exercitation pariatur in enim enim. Minim quis labore sunt dolore sit occaecat magna ea nulla. 
          </CardText>
          <Button className="bg-main-blue  pull-right" style={ {borderRadius:"30px", border:"0px"}} > Checkout </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Blog;
