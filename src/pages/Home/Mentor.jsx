import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

function Mentor()
{

  return(
    <div className="container-fluid pt-5 pb-1 ">
        <div className="row m-auto ">
            <div className="col-11 offset-1 col-md-5 p-0">
            <h2 className="text-main-blue m-0 p-0 text-left" >Find a Mentor.</h2>
            <hr className="ruler pull-left m-0 mt-2 w-50" />
            <br></br>
          </div>
        <div className="col-10 offset-1 offset-md-0 col-md-5  p-0" >
        </div>
        <div className="col-sm-1"></div>
        </div>

        <div className="row m-auto ">
          <div className="col-11 offset-1 col-md-5 p-0 order-12 order-md-1">
            <h3 className="text-main-blue">An enriching mentorship program to help students make informed decisions about their streams and career paths. </h3>
            <p className="mt-4 mb-4">In the 7 week long program, students of classes 9 - 12, that is, the mentees for this program will be allotted experienced mentors for weekly interactive sessions filled with informative talks, healthy discussions on career related topics, enlightening video screenings, fun-filled activities, guided testing including Value, Personality and Aptitude tests from verified sources as well as insightful analysis of their results.  
 </p>
            <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px", border:"0px"}} size="lg"  >  <Link className="m-auto text-center" to="/mentorship" style={{color:"#fff"}}>Enrol Now</Link> </Button>
          </div>
          <div className="col-10 offset-1 offset-md-0 col-md-5  p-0 order-1 order-md-5" >
            <img src="assets/HomePage/mentorship.png" alt="Mentorship" width="70%" className="d-flex m-auto" />
            <br></br>
          </div>
          <div className="col-sm-1 order-5 order-md-12"></div>
          </div>
          <br></br>
        </div>
      );


}
export default Mentor;
