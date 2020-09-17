import React from 'react';
import {Button} from 'reactstrap';

function AssessYourself()
{

  return(
    <div className="container-fluid pt-5 pb-2 bg-soft-grey">
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
            <h3 className="text-main-blue text-right">Laborum aute culpa occaecat culpa voluptate sint ullamco reprehenderit laboris.</h3>
            <p className="mt-4 mb-5 text-right">Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptate dolore ullamco ut.</p>
            <Button className="bg-main-blue pl-5 pr-5 pull-right" style={ {borderRadius:"30px"}} size="lg" > Take test </Button>
          </div>
          <div className="col-sm-1"></div>
          </div>
          <br></br>
        </div>
      );


}
export default AssessYourself;
