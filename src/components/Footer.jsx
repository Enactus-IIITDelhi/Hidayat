import React from "react"
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {Link} from "react-router-dom"


function Footer()
{
    const d = new Date();

    return (<>
    <div className="bg-soft-grey pb-2 pt-4 m-0 mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-10 offset-1 offset-md-0 pb-4">
                    <img src="HidayatLogo.png" alt="Hidayat Logo" className="w-50 d-flex "></img>
                    <p style={{fontSize:"90%"}} className="pr-2">
                    Project Hidayat aims to provide the underprivileged 
                    youth with opportunities for self-development, 
                    enabling them to explore and build on their strengths,
                    overcome their fears and develop necessary skills for 
                    a lucrative and successful future.
                    </p>

                </div>
                <div className="col-md-1 col-1">

                </div>
                <div className="col-md-4 col-sm-11 offset-1 offset-md-0 pb-5">
                    <div>
                        <Link className="m-auto text-center black footer-links" to="/">About Us</Link>
                        <br/>
                        <Link to="/resources" className="black footer-links">Our Aptitude Test</Link>
                        <br />
                        <Link to="/" className="black footer-links">Mentorship Program</Link>
                        <br />
                        <Link to="/blog" className="black footer-links">Blog</Link>
                        <br/>
                        <Link to="/joinUs" className="black footer-links">Join Us</Link>
                    </div>
                    <br></br>
                    <div>
                        <h5 className="m-0 mb-2">Get In Touch</h5>
                        <p className="p-0 m-0"><i class="fa fa-envelope black"></i> &nbsp;hidayat@iiitd.ac.in</p>
                        <p><i class="fa fa-circle black"></i>&nbsp; IIIT Delhi, Okhla Phase-III, <br></br>&nbsp; &nbsp; &nbsp; New Delhi</p>
                        <Button color="dark" className="rounded-circle">
                            <span className="fa fa-twitter"></span>
                        </Button>

                        <Button color="dark" className="rounded-circle ml-3">
                            <span className="fa fa-facebook"></span>
                        </Button>

                        <Button color="dark" className="rounded-circle ml-3">
                            <span className="fa fa-instagram"></span>
                        </Button>

                    </div>


                </div>  
                <div className="col-md-4 col-sm-11 offset-1 offset-md-0 pb-3">
                    <p className="m-0">Let's work on your suggestions</p>
                    <hr className="ruler-footer pull-left m-0 mt-1" />
                    <br/>
                    <Form>
                    <FormGroup row>
                    <Label for="userName" hidden>Name</Label>
                    <Input className="white footer-shadow" type="text" name="name" id="userName" placeholder="Full name" />
                    </FormGroup>
                    <FormGroup row>
                    <Label for="userEmail" hidden>Email</Label>
                    <Input className="white footer-shadow" type="email" name="email" id="userEmail" placeholder="E-mail address"  />
                    </FormGroup>
                    <FormGroup row>
                    <Label for="userMessage" hidden>Message</Label>
                    <Input className="white footer-shadow" type="textarea" name="message" id="userMessage" placeholder="Write your message" rows={6}  />
                    </FormGroup>
                    <FormGroup row className="pull-right" >
                    <Button className="bg-main-blue pl-5 pr-5 mr-4" style={ {borderRadius:"30px", border:"0px"}} size="md" > Send </Button>
                    </FormGroup>
                    </Form>
                </div>

            </div>

        </div>
        <hr className="p-0 m-0 m-1 footer-line m-auto" />
        <p className="ml-4 pl-4 ">{"© Project Hidayat "+ d.getFullYear()}</p>

    </div>
   

    </>);
}
export default Footer;