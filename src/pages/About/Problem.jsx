import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';

function Jumbo() {
    return (
        <Jumbotron className="jumbo  pt-0 pb-0 m-0">
            <Container fluid>
                <Row >

                <Col md="6" className="d-flex">
                    <div className="d-flex flex-column m-auto" >
                    <h2 className="mt-5 text-main-blue" style={{textAlign:"left"}}>The Problem</h2>
                    <h5 className="mt-2 mb-5 " style={{textAlign:"left"}}>
                    Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatu Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptate dolore ullamco ut.
                    </h5>
                    </div>
                </Col>
                <Col md="6" className="p-0 d-flex">
                    <img src="assets/about/about2.png" alt="Banner" width="100%" className="d-flex m-0" />
                </Col>
                </Row>
            </Container>
        </Jumbotron>

    );
}

export default Jumbo;