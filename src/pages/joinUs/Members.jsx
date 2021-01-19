import React from 'react';
import members from './memberData';
import {Card, CardImg,  CardBody,CardTitle, CardSubtitle} from 'reactstrap';

function Member()
{
    return (
        <>
        <h1 className="middle text-main-blue">MEET THE TEAM</h1>
        <p className="middle join-subheading pb-3">
        Lorem ipsum dolor sit amet, consect <br/> eturadipiscing elit. 
        </p>
        <div class="row pr-5 pl-5 m-0 ">
                {
                    members.map((member, index)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 pb-4 mr-0 ml-0" key={index}>                            
                            <Card className="no_border m-0 p-0">
                                <CardImg top width="100%" src={member.imagePath} alt={member.name} />
                                <CardBody>
                                <CardTitle tag="h5" className="middle text-main-blue ">{member.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 middle">{member.role}</CardSubtitle>
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
export default Member;