import React from 'react';
import {Button} from 'reactstrap';

function JoinTeam()
{
    return(
        <>
            <div className="container-fluid pt-5 pb-2 ">
            <h2 className="text-main-blue middle pb-0 mb-0">Interested in joining our team?</h2>
            <p className="middle join-subheading pl-5 pr-5 ml-2 mr-2 mt-0">
            Get a chance to contribute to society and join our team through the following options.

            </p>
            <div className="row m-auto pb-5">
                <div className="row m-auto ">
                    <div className="col-md-6 pl-5 pr-5 pb-3 pt-2" >
                        <p>
                        Volunteering with Hidayat will allow you to interact directly with underprivileged people and mentor them in different fields like IT and academics. You will get a chance to guide young minds and provide career counselling to them.
                        </p>
                        <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px", border:"0px"}} size="lg" > Volunteer </Button>
                    </div>

                    <div className="col-md-6 pl-5 pr-5 pb-3 pt-2" >
                        <p>
                        Interning at Hidayat is a fun way to learn an organisation's workings and give back to society. There are many options to choose from, including, but not limited to, content writing, design, web development, event management, PR and publicity.
                        </p>
                        <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px", border:"0px"}} size="lg" > Apply for Intership </Button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default JoinTeam;