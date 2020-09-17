import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Banner() {
  const data = ["Mentor the Underprivileged", "Create Learning Opportunities", "Assist the Unemployed"];

  return (
    <Container className="banner">
      <Row>
        {
          data.map((str) => {
            return (
              <Col xs="12" sm="4" className={`mb-5 ${(data.indexOf(str)!==data.length-1)?"right-margin":""}`}>
                <div className="content d-flex" style={{backgroundImage: "url(assets/HomePage/bg-shape.svg)"}} >
                  <h4 className="title d-flex m-auto text-center font-weight-bold w-50">{str}</h4>
                </div>
              </Col>
            );
          })
        }
      </Row>
    </Container>
  );
}

export default Banner;
