import React from 'react';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

function Contact(){
  return(

    <div className="container-fluid">

      <div className="row m-auto ">
        <div className="col-11 offset-1 col-md-5 p-0">
        <h2 className="text-main-blue m-0">Let's work on your</h2>
        <h2 className="text-main-blue m-0">Idea.</h2>
        <hr className="ruler m-0 mt-2" />
        <br />

      <p><i class="far fa-envelope "></i> &nbsp;hidayat@iiitd.ac.in</p>
      <p><i class="far fa-circle"></i>&nbsp; IIIT Delhi, Okhla Phase-III, <br></br>&nbsp; &nbsp; &nbsp; New Delhi</p>
      <br></br>

        </div>

      <div className="col-10 offset-1 offset-md-0 col-md-5">
      <Form>
        <FormGroup row>
        <Label for="userName" hidden>Name</Label>
        <Input type="text" name="name" id="userName" placeholder="Full name" style={{backgroundColor:"#eee", boxShadow:"none"}} />
        </FormGroup>
        <FormGroup row>
        <Label for="userEmail" hidden>Email</Label>
        <Input type="email" name="email" id="userEmail" placeholder="E-mail address" style={{backgroundColor:"#eee", boxShadow:"none"}} />
        </FormGroup>
        <FormGroup row>
        <Label for="userMessage" hidden>Message</Label>
        <Input type="textarea" name="message" id="userMessage" placeholder="Write your message" rows={6} style={{backgroundColor:"#eee", boxShadow:"none"}} />

        </FormGroup>
        <FormGroup row style={{float:"right"}} >
        <Button style={ {borderRadius:"30px", backgroundColor:"#00b1ff"}} size="lg" > &nbsp; &nbsp; Send  &nbsp; &nbsp;</Button>
        </FormGroup>
        </Form>

      </div>
      <div className="col-sm-1"></div>
    </div>


    </div>
  )

}
export default Contact;
