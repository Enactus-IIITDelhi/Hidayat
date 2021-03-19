import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'
function AssessYourself()
{

  return(
    <div className="container-fluid pt-5 pb-2  bg-soft-grey">
        <div className="row m-auto ">
            <div className="col-11 offset-1 col-md-5 p-0">
          </div>
        <div className="col-10 offset-1 offset-md-0 col-md-5  p-0" >
          <h2 className="text-main-blue m-0 p-0 text-right" >Assess Yourself.</h2>
          <hr className="ruler pull-right m-0 mt-2 w-50" />
          <br></br>
        </div>
        <div className="col-sm-1"></div>
        </div>

        <div className="row m-auto ">
          <div className="col-11 offset-1 col-md-5 p-0 ">
            <img src="assets/HomePage/career-guidance.png" alt="Career Guidance" width="70%" className="d-flex m-auto" />
            <br></br>
          </div>
          <div className="col-10 offset-1 offset-md-0 col-md-5  p-0" >
            <h3 className="text-main-blue text-right">Build a dream career based on your skills and abilities</h3>
            <p className="mt-4 mb-5 text-right">The following test will help you analyze your strengths and weaknesses which will enable you to choose a career path that matches your skill set and personality. Discover the best within you!</p>
            <Button className="bg-main-blue pl-5 pr-5 pull-right" style={ {borderRadius:"30px", border:"0px"}} size="lg" > <Link className="m-auto text-center" to="/resources" style={{color:"#fff"}}>Take test</Link>  </Button>
          </div>
          <div className="col-sm-1"></div>
          </div>
          <br></br>
        </div>
      );


}
export default AssessYourself;
