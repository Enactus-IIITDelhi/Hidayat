import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

function Contact(){
  return(

    <div className="container-fluid pt-5 pb-3">
      <div className="row m-auto ">
        <div className="col-11 offset-1 col-md-5 p-0">
          <h2 className="text-main-blue m-0">Let's work on your</h2>
          <h2 className="text-main-blue m-0">Idea.</h2>
          <hr className="ruler pull-left m-0 mt-2" />
          <br />
          <p><i class="fa fa-envelope text-secondary"></i> &nbsp;hidayat@iiitd.ac.in</p>
          <p><i class="fa fa-circle text-secondary"></i>&nbsp; IIIT Delhi, Okhla Phase-III, <br></br>&nbsp; &nbsp; &nbsp; New Delhi</p>
          <br></br>
        </div>

        <div className="col-10 offset-1 offset-md-0 col-md-5">
          <Form>
            <FormGroup row>
              <Label for="userName" hidden>Name</Label>
              <Input className="bg-soft-grey shadow-none" type="text" name="name" id="userName" placeholder="Full name" />
              </FormGroup>
            <FormGroup row>
              <Label for="userEmail" hidden>Email</Label>
              <Input className="bg-soft-grey shadow-none" type="email" name="email" id="userEmail" placeholder="E-mail address"  />
            </FormGroup>
            <FormGroup row>
              <Label for="userMessage" hidden>Message</Label>
              <Input className="bg-soft-grey shadow-none" type="textarea" name="message" id="userMessage" placeholder="Write your message" rows={6}  />
            </FormGroup>
            <FormGroup row className="pull-right" >
              <Button className="bg-main-blue pl-5 pr-5" style={ {borderRadius:"30px", border:"0px"}} size="lg" > Send </Button>
            </FormGroup>
          </Form>
        </div>
      <div className="col-sm-1"></div>
    </div>
    </div>
  )

}
export default Contact;
