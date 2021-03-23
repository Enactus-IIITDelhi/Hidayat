import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';

function Jumbo() {
    return (
        <Jumbotron className="jumbo  pt-0 pb-0 m-0">
            <Container fluid>
                <Row >
                <Col md="6" className="p-0 d-flex">
                    <img src="assets/about/about1.png" alt="Banner" width="100%" className="d-flex m-0" />
                </Col>
                <Col md="6" className="d-flex">
                    <div className="d-flex flex-column m-auto" >
                    <h2 className="mt-5 text-main-blue" style={{textAlign:"right"}}>What we do?</h2>
                    <h5 className="mt-2 mb-5 " style={{textAlign:"right"}}>
                    With the aim to help learners be well equipped before making career-related decisions about their future, we provide guidance and mentorship to children and the youth. By introducing them to institutes  where they can receive training and to resources to develop essential career and life skills, we  give them an opportunity to grow along with their peers and with us. We work along the UN’s Sustainable Development Goals including quality education, decent work and economic growth and reduced inequalities. We wish to move towards an empowered India. 

                    </h5>
                    </div>
                </Col>

                </Row>
            </Container>
        </Jumbotron>

    );
}

export default Jumbo;