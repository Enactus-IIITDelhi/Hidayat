import React from 'react';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

function Jumbo() {
  return (
    <>
    <Jumbotron className="jumbo pt-0 pb-0">
      <Container fluid>
        <Row>
          <Col lg="6" className="d-flex">
            <div className="d-flex flex-column m-auto">
              <h1 className="display-5 mt-5 text-main-blue">Laborum aute culpa occaecat culpa voluptate sint ullamco reprehenderit laboris.</h1>

              <h4 className="mt-2 mb-5">Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptate dolore ullamco ut.</h4>
            </div>
          </Col>

          <Col lg="6" className="d-none d-md-flex">
            <img src="assets/HomePage/banner.png" width="100%" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    </>
  );
}

export default Jumbo;
