import React from 'react';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';

function Jumbo({title, subtitle, image}) {
    return (
        <Jumbotron className="jumbo pt-0 pb-0 mt-0 ">
            <Container fluid>
                <Row>
                <Col lg="6" className="d-flex">
                    <img src={image} alt="Banner" width="100%" className="d-flex m-0" />
                </Col>
                <Col lg="6" className="d-flex">
                    <div >
                    <h2 className="mt-5 text-main-blue" style={{textAlign:"right"}}>{title}</h2>
                    <h5 className="mt-2 mb-3 " style={{textAlign:"right"}}>{subtitle}</h5>
                    <Button className=" mb-3 mt-0 bg-main-blue pull-right pl-3 pr-3" style={ {borderRadius:"30px", border:"0px"}} size="lg">Enrol now</Button>
                    </div>
                </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Jumbo;