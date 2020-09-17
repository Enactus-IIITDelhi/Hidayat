import React from 'react';
import {Button} from 'reactstrap';

function Mentor()
{

  return(
    <div className="container-fluid pt-5 pb-1">
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
            <h3 className="text-main-blue">Laborum aute culpa occaecat culpa voluptate sint ullamco reprehenderit laboris.</h3>
            <p className="mt-4 mb-4">Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptate dolore ullamco ut.</p>
            <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px"}} size="lg" > Book a session </Button>
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
