import React from "react"
import {Button} from 'reactstrap';


function Initiative()
{
    return (<>
        <h2 className="mt-5 pb-5 text-main-blue middle">Initiatives</h2>
        <div className="row m-0">
            <div className="col-md-5 col-12  offset-md-1 pl-5 pr-5 pr-md-3 pl-md-3 pb-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-right" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Initiative 1</span></Button>
                <br></br>         
                <div className="rightDiv pt-1 pr-1 pl-1 ">
                    <h5 className="pt-2 pb-0 pl-1 pr-1">Mentorship Program - Career Guidance Sessions</h5>
                    <p className="pl-2 pr-2">
                    The goal of this program spanning 7 weeks was to help students in classes 10th and 12th make informed decisions about their streams/branches and career paths respectively and not be held back due to lack of resources. Weekly interactive sessions filled with informative talks, healthy discussions on career related topics, enlightening video screenings, fun-filled activities, guided testing including Interest, Value, Personality and Aptitude tests as well as insightful analysis of their results were conducted in these sessions. 

                    </p>
                </div>          

            </div>

            <div className="col-md-5 col-12 pb-2  pl-5 pr-5 pr-md-3 pl-md-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-left" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Initiative 2</span></Button>
                <br></br>
                <div className="leftDiv pt-1 pr-1 pl-1">
                <h5 className="pt-2 pb-0 pl-1 pr-1">IT Bootcamp</h5>

                        <p className="pl-2 pr-2">
                        A number of sessions spanning 7 weeks were conducted to help develop essential IT skills in children and youth. Live demonstrations followed by activities along with informative slides detailing tutorials on introduction to Gmail, Google Drive, Google Documents, Google Slides, Google Sheet, and their counterparts in Microsoft Office were included in these sessions. A session on Cyber Security and Privacy to help students protect themselves was also conducted. 

                        </p>

                </div>   
                <Button className="bg-main-blue pl-5 pr-5 pull-right mt-3" style={ {border:"0px"}} size="lg" > <span style={{fontWeight:"500"}}>More coming soon</span></Button>

            </div>
            <div className="col-md-1 col-0">

            </div>

            <div>
                
                </div>

        </div>


    </>);
}
export default Initiative;