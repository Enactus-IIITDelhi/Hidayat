import React from 'react';
import members from './memberData';
import {Card, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

function Member() {
    return (
        <>
        <h1 className="middle text-main-blue">MEET THE TEAM</h1>
        <p className="middle join-subheading pb-0 pl-4 pr-4 mb-1">
        "The strength of the team is each individual member. The strength of each member is the team."  
        </p>
        <p className="middle pt-0 mt-0 pb-4 pl-4 pr-4" style={{fontWeight:"400", fontSize:"110%"}}>
        -Phil Jackson
        </p>
        <div class="row pr-5 pl-5 m-0 ">
                {
                    members.map((member, index)=>{
                        return(
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 pb-4 mr-0 ml-0" key={index}>  
                            <img src={member.imagePath} alt={member.name} width="200px" height="200px" className="imgCardJoin"></img>                         
                            <Card className="no_border m-0 p-0" >
                                {/* <CardImg top width="100%" src={member.imagePath} alt={member.name} height="300" width="300" /> */}
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
        <hr></hr>

        </>
    );
}
export default Member;