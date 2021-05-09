import React from 'react';
import { Container, Row, Col} from 'reactstrap';

function Blog3() {
    return (
        <Container className="text-justify lead">
        <h1 className="text-main-blue text-center font-weight-bold display-4">Academic Support Program</h1>
        <h4 className="text-center">by <b>Prakriti Garg</b>, B.Tech. Class of 2024</h4>
        <Row className="d-flex my-5">
            <Col xs="12"  md="8" lg="7" className="d-flex m-auto">
                <div className="d-flex w-100">
                    <img src="/assets/Blog/FINAL3.png" alt="Banner" className="d-flex m-auto w-100" />
                </div>
            </Col>
        </Row>

        <p>In the academic support program by enactus in collaboration with Light Up Foundation I taught science and english to four students of class ninth and tenth. It was a great teaching experience and I thoroughly enjoyed it.The students were very enthusiastic and keen to learn which made the whole experience even more fun filled. Due to the pandemic, the schools are closed and online classes are being taken by the school which was not of much help to all since some students didn’t have the facilities to attend online classes, initially thereby leaving them completely unguided. Imagine the students didn’t attend any classes and they had to appear for board exams!! Undoubtedly the online mode posed some challenges since we can also feel that learning electron dot structures for the first time in online mode is definitely more challenging than learning them in offline mode where the teacher teaches step by step and then gives a question to solve and checks them. I made powerpoint presentations for the chapters to teach clubbed with NCERTs and questions.For english literature,first the students use to read the chapter line by line to improve pronunciation and comprehend better and then they used to translate the sentences in hindi with our assistance so that they get to know the meaning of words and understand grammar too.We made sure that it was not a one way communication that we read and just explain the story to them which won’t be of that much help. Gradually I could feel the difference in them in subsequent lessons. We also did comprehensions in a similar manner. The students were not very comfortable speaking in english and they wanted to be fluent so we used to converse in english for doubts and questions so that they gradually become confident and habitual to conversations in english. I wish to take more such classes in future.</p>
        </Container>
    );
}

export default Blog3;