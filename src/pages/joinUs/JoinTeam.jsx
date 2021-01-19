import React from 'react';
import {Button} from 'reactstrap';

function JoinTeam()
{
    return(
        <>
            <div className="container-fluid pt-5 pb-2 bg-soft-grey">
            <h2 className="text-main-blue middle">Interested in joining our team?</h2>
            <p className="middle join-subheading">
            Lorem ipsum dolor sit amet, consect <br />  eturadipiscing elit.
            </p>
            <div className="row m-auto pb-5">
                <div className="row m-auto ">
                    <div className="col-md-6 pl-5 pr-5 pb-3 pt-2" >
                        <p>
                        Lorem ipsum dolor sit amet, conse cteturadipiscing elit. Etiam quis sapien vitae mauris interdum elementum Sed accumsan nulla velit, vel imper
                        diet mi euismod eget. Nunc viverra Lorem ipsum dolor sit amet, conse
                        cteturadipiscing elit. Etiam quis sapien vitae mauris interdum elementum Sed accumsan nulla velit, vel imper
                        diet mi euismod eget. Nunc viverra
                        </p>
                        <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px"}} size="lg" > Volunteer </Button>
                    </div>

                    <div className="col-md-6 pl-5 pr-5 pb-3 pt-2" >
                        <p>
                        Lorem ipsum dolor sit amet, conse cteturadipiscing elit. Etiam quis sapien vitae mauris interdum elementum Sed accumsan nulla velit, vel imper
                        diet mi euismod eget. Nunc viverra Lorem ipsum dolor sit amet, conse
                        cteturadipiscing elit. Etiam quis sapien vitae mauris interdum elementum Sed accumsan nulla velit, vel imper
                        diet mi euismod eget. Nunc viverra
                        </p>
                        <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px"}} size="lg" > Apply for Intership </Button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default JoinTeam;