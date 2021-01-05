import React from 'react';
import { useParams } from 'react-router';
import { Container, Col, Row, Button } from 'reactstrap';
import data from './quizData';
import { Link } from 'react-router-dom';

const circleWidth = 50;

function Circle({color}) {
    if(!color)
        color = "white";
    return (
        <div className="rounded-circle d-flex m-auto" style={{background: `var(--${color})`, width: circleWidth, height: circleWidth, border: "1px solid grey"}}>
            <div className="rounded-circle d-flex m-auto bg-soft-grey" style={{width: 0.70*circleWidth, height: 0.70*circleWidth}}>
                
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

var activeQuiz = null;
var activeQuesNo = null;
var time = null;
var timerActive = false;
/**
 * Mode
 * 0 - Start Quiz Page
 * 1 - Quiz Question Displayed
 * 2 - Quiz Over
 */
var mode = 0;

function updateTime() {
    if(time != null) {
        console.log("time-- ", time);
        time--;
        if(time <= 0) {
            loadQuizOver();
        }
    }
}

function loadQuiz(quizName) {
    var quizObj = null;
    for(quizObj of data) {
        if(quizObj.key === quizName) {
            activeQuiz = quizObj;
            activeQuesNo = 1;
            time = 1200;
            break;
        }
    }
}

function startQuiz() {
    if(!timerActive) {
        timerActive = true;
        setInterval(updateTime, 1000);
    }
}

function loadQuizOver() {
    activeQuiz = null;
    activeQuesNo = null;
    time = null;
}

function Time() {
    return (
        <>
        Time: {time/60}m {time%60}s
        </>
    );
}

function DynamicBox() {
    if (mode === 0) {
        return (
            <>
            <div className="h-25 pb-5">
                <Button size="lg" color="primary" className="bg-main-blue float-left">Back</Button>
                <div className="float-right h-100 d-flex">
                    <p className="d-flex m-auto h4"><Time /></p>
                </div>
                <div className="clear-fix"></div>
            </div>

            <div className="d-flex h-75 py-5">
                <div className="d-flex m-auto">
                    <div className="w-100 pb-5">
                        <h3 className="text-center">{activeQuiz.name}</h3>
                        <Button onClick={startQuiz} size="lg" color="primary" className="bg-main-blue mx-auto d-block">Start Quiz</Button>
                    </div>
                </div>
            </div>
            </>
        );
    }
    else if (mode === 1) {
        return (
            <>

            </>
        );
    }
}

function QuizContainer({quizName}) {
    loadQuiz(quizName);

    return (
        <Container fluid className="mb-3">
            <Row>
                <Col className="bg-soft-grey p-3 pr-5 mb-2" xs="12" lg="4">
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
                            <Row>
                                <Col xs="auto">
                                    <Circle color={color} />
                                </Col>

                                <Col className="d-flex text-main-blue quiz-name">
                                    <h4 className="w-100 d-flex m-auto" height="100%">{quizData.name}</h4>
                                </Col>
                            </Row>
                            </Link>
                            {Gap}
                            </>
                        );
                    })}
                </Col>
                

                {/* Quiz Questions Column */}
                <Col xs="12" lg="8">
                    <DynamicBox time={time} />
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
                    <QuizContainer quizName={params.quizName}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Quiz;