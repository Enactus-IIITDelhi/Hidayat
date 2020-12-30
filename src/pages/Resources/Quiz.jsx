import React from 'react';
import { useParams } from 'react-router';
import { Container, Col, Row } from 'reactstrap';
import data from './quizData';
import { Link } from 'react-router-dom';

const circleWidth = 55;

function Circle({color}) {
    if(!color)
        color = "white";
    return (
        <div className="rounded-circle d-flex m-auto" style={{background: `var(--${color})`, width: circleWidth, height: circleWidth, border: "1px solid grey"}}>
            <div className="rounded-circle d-flex m-auto" style={{background: "var(--white)", width: 0.70*circleWidth, height: 0.70*circleWidth}}>
                
            </div>
        </div>
    );
}

function Line() {
    return (
        <div className="d-flex m-auto" style={{width: circleWidth, height: circleWidth/2}}>
            <div className="d-flex m-auto" style={{background: "var(--gray)", width: "3px", height: circleWidth/2}}>
                
            </div>
        </div>
    );
}

function QuizContainer({quizName}) {
    return (
        <Container fluid>
            <Row>
                <Col className="bg-soft-grey p-3 pr-5" xs="auto">
                    {data.map((quizData) => {
                        let Gap = <div> </div>;
                        if(data.indexOf(quizData) !== data.length -1) {
                            Gap = (
                                <Row>
                                    <Col xs="auto">
                                        <Line />    
                                    </Col>
                                </Row>
                            );
                        }

                        let color = "green";
                        if(quizName === quizData.key)
                            color = "main-blue-color";
                        
                        return(
                            <>
                            <Link to={`/resources/${quizData.key}`} >
                            <Row className="">
                                <Col xs="auto">
                                    <Circle color={color} />
                                </Col>

                                <Col className="d-flex text-main-blue quiz-name">
                                    <h3 className="w-100 d-flex m-auto" height="100%">{quizData.name}</h3>
                                </Col>
                            </Row>
                            </Link>
                            {Gap}
                            </>
                        );
                    })}
                </Col>

                <Col>
                    <h2>{quizName}</h2>
                </Col>
            </Row>
        </Container>
    );
}

function Quiz() {
    let params = useParams();
    return(
        <Container fluid>
            <Row>
                <Col lg={{size: 10, offset: 1}}>
                    <QuizContainer quizName={params.quizName} />
                </Col>
            </Row>
        </Container>
    );
}

export default Quiz;