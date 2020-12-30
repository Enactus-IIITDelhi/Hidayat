import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

function TestCard({name, image, link}) {
    return (
        <Col className="pt-4 pt-md-1 pt-lg-5 pb-4 pb-md-1 pb-lg-5 hover-fill-lightgrey" sm="6" lg="4" xl="3">
            <Link to={link}>
                <div width="100%" fill="black" className="d-flex">
                    <img width="100%" className="d-flex m-auto" src={image} alt={name} />
                </div>

                <div width="100%" fill="black">
                    <h3 className="text-center text-main-blue">{name}</h3>
                </div>
            </Link>
        </Col>
    );
}

function Tests() {
    return (
        <Container fluid>
            <Row>
                <Col md={{size: 10, offset: 1}}>
                    <Container fluid>
                        <Row>
                        <TestCard
                            name="Language Aptitude"
                            image="assets/Resources/language.png"
                            link="/resources/language"
                        />
                        <TestCard
                            name="Numerical Aptitude"
                            image="assets/Resources/numerical.png"
                            link="/resources/numerical"
                        />
                        <TestCard
                            name="Abstract Reasoning"
                            image="assets/Resources/abstract.png"
                            link="/resources/abstract"
                        />
                        <TestCard
                            name="Verbal Reasoning"
                            image="assets/Resources/verbal.png"
                            link="/resources/verbal"
                        />
                        <TestCard
                            name="Mechanical Reasoning"
                            image="assets/Resources/abstract.png"
                            link="/resources/mechanical"
                        />
                        <TestCard
                            name="Spatial Aptitude"
                            image="assets/Resources/spatial.png"
                            link="/resources/spatial"
                        />
                        <TestCard
                            name="Perceptual Aptitude"
                            image="assets/Resources/perceptual.png"
                            link="/resources/perceptual"
                        />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Tests;