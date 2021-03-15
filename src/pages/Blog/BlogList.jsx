import React from 'react';
import blogs from './blogs';
import {Card, CardImg,  CardBody,CardText, Button} from 'reactstrap';


function BlogList()
{
    return (
        <>
        <div class="row p-2 pr-md-5 pl-md-5 pt-md-5 m-0 ">
                {
                    blogs.map((blog, index)=>{
                        return(
                        <div className="col-md-4 col-sm-6 col-12 pb-5 mr-0 ml-0" key={index}>                            
                            <Card className="m-0 p-0 h-100 w-100 card-shadow">
                                <CardImg top width="100%" src={blog.imagePath} alt={blog.title} />
                                <CardBody>
                                <CardText>{blog.plot}</CardText>
                                <Button className="bg-main-blue pull-right pl-3 pr-3" style={ {borderRadius:"30px", border:"0px"}} size="lg" >Read More </Button>
                                </CardBody>
                            </Card>
                        </div>
                        );
                    })
                }
        </div>
        </>
    );
}
export default BlogList;