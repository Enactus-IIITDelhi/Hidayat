import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

function SignUp(props) {

    return (
        <Container className="mt-5 mb-5">
            <Row className="border-radius-30 shadow">
                <Col md="6" className="d-none d-md d-lg-flex p-0">
                    <img src="assets/login.png" alt="banner" className="d-flex m-auto w-100 border-radius-left-30"></img>
                </Col>
                
                <Col md="6" xs="12">
                    <Row>
                        <Col xs="12" className="d-flex">
                            <img src="HidayatLogo.png" alt="Hidayat Logo" className="w-50 d-flex m-auto"></img>
                        </Col>
                    </Row>

                    <Row className="pl-md-5 pr-md-5 pl-xs-2 pr-xs-2 mt-3">
                        <Col xs="12">
                        <Form>
                            <FormGroup>
                                <Input type="text" name="Name" id="fullname" placeholder="Full Name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password" placeholder="Password" />
                            </FormGroup>
                            <Button className='bg-main-blue w-50 mt-3 mb-4'>Register</Button>
                        </Form>
                        </Col>

                        <Col xs="12">
                            <p>
                            Already Registered?
                            </p>
                            <Link to="/login">
                                <Button className='bg-main-blue w-50  mb-3'>Login</Button>
                            </Link>
                        </Col>

                        <Col xs="12">
                            <hr/>
                        </Col>

                        <Col>
                            <Button outline color='danger' className='w-100 mt-3 mb-4'>
                                <i className="fa fa-lg fa-google mr-3" aria-hidden="true"></i>
                                Continue With Google
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;