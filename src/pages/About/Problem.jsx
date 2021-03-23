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
                    A <a href="https://www.indiatoday.in/education-today/news/story/93-indian-students-aware-of-just-seven-career-options-what-are-parents-doing-wrong-1446205-2019-02-04" target="_blank" style={{textDecoration:"underline"}}> 2019 report
                        </a> on a survey on career option awareness among Indian students revealed that a staggering 93% of the students aged 14 to 21 were aware of just seven career options even though there are more than 250 different types of job options available in India. This alarming lack of awareness is what we wish to conquer in our own unique way starting with providing a platform with career related resources and guidance. 
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