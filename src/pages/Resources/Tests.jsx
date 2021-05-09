import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import data from './quizData';

function TestCard({name, image, link}) {
    return (
        <Col className="pt-4 pt-md-1 pt-lg-5 pb-4 pb-md-1 pb-lg-5 hover-fill-lightgrey" sm="6" lg="4" xl="3">
            <a href={link} target="_blank">
                <div width="100%" fill="black" className="d-flex">
                    <img width="100%" className="d-flex m-auto" src={image} alt={name} />
                </div>

                <div width="100%" fill="black">
                    <h3 className="text-center text-main-blue">{name}</h3>
                </div>
            </a>
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
                            {
                                data.map((quiz) => {
                                    return (
                                        <TestCard
                                            name={quiz.name}
                                            image={`assets/Resources/${quiz.key}.png`}
                                            link={quiz.link}
                                        />
                                    );
                                })
                            }                        
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Tests;