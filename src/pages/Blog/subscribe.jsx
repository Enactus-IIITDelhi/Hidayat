import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

function Subscribe()
{
    return (
        <>
   <div className="container-fluid pt-5 pb-3">
      <div className="row m-auto ">
        <div className="col-11 offset-1 col-md-4 p-0">
            <h2 className=" pr-5">Subscribe to our blog!</h2>
        </div>

        <div className="col-10 offset-1 offset-md-0 col-md-6">
          <Form>
            <FormGroup row>
              <Label for="userEmail" hidden>Email</Label>
              <Input className="bg-soft-grey shadow-none" type="email" name="email" id="userEmail" placeholder="E-mail address"  />
            </FormGroup>
            <FormGroup row className="pull-right" >
              <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px", border:"0px"}} size="lg" >Subscribe </Button>
            </FormGroup>
          </Form>
        </div>
      <div className="col-sm-1"></div>
    </div>
    </div>
        </>
    );
}
export default Subscribe;