import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

function MainJumbotron({title, subtitle, image}) {
    return (
        <Jumbotron className="jumbo pt-3 pb-0">
            <Container fluid>
                <Row>
                <Col lg="6" className="d-flex">
                    <img src={image} alt="Banner" width="100%" className="d-flex m-auto" />
                </Col>
                <Col lg="6" className="d-flex">
                    <div >
                    <h2 className="mt-5">{title}</h2>
                    <h5 className="mt-2 mb-5 text-main-blue">{subtitle}</h5>
                    </div>
                </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default MainJumbotron;