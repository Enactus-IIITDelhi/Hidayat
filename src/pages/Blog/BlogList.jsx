import React from 'react';
import blogs from './blogs';
import {Card, CardImg,  CardBody,CardText, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

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
                                <CardText>
                                    <h3 className="text-main-blue">{blog.title}</h3>
                                    {blog.plot}
                                </CardText>
                                <Link to={`/blog/${blog.link}`}>
                                <Button className="bg-main-blue pull-right pl-3 pr-3" style={ {borderRadius:"30px", border:"0px"}} size="md" >Read More </Button>
                                </Link>
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