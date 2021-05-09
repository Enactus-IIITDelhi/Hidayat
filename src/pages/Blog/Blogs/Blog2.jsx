import React from 'react';
import { Container, Row, Col} from 'reactstrap';

function Blog2() {
    return (
        <Container className="text-justify lead">
        <h1 className="text-main-blue text-center font-weight-bold display-4">Lightup Testimonials</h1>
        <h4 className="text-center">by <b>Apoorva Agrawal</b>, B.Tech. Class of 2024</h4>
        <Row className="d-flex">
            <Col xs="12"  md="8" lg="7" className="d-flex m-auto">
                <div className="d-flex w-100">
                    <img src="/assets/Blog/FINAL2.png" alt="Banner" className="d-flex m-auto w-100" />
                </div>
            </Col>
        </Row>

        <p>I volunteered to teach a student through the Academic Support Program of Enactus IIITD. When I first talked to the child, he told me his goals and ambitions, how he wants to be an IAS officer and doesn't want to stop studying ever because of the lack of resources. His name is Sanjay, he is a brilliant student and now a good friend of mine. He told me how he didn’t want his humble background to become a barrier in fulfilling his dreams. He often used to ask me how much money it would take to go to college and further for higher studies. He used to tell me he will study hard, score well and get enrolled in his favourite college. </p>

        <p>I taught him maths and sometimes english too. He asked me to teach him english as he wanted to become fluent in it. He was a dedicated student, always on time in classes, always paying attention to what was being taught in class. He answered questions and asked queries and this active participation made me happy to answer his doubts. </p>

        <p>I remember one day he told me how much he likes studying with me and understands everything that I teach him. He used to fear maths, and now he loves it. </p>

        <p>He would often say, “Didi aaj bhi class lelo”. We used to have a lot of fun, discussing our goals, talking about life, solving trigonometry questions, laughing and him telling me how much he wants to serve the country. I loved teaching him; being able to pass on the knowledge I had procured from my teachers was really heartwarming. I remember taking 3 hours out daily for teaching him and giving my all while teaching and he used to appreciate it so much. He would rarely miss the homeworks I would give him and would always put in effort from his side. </p>

        <p>I am so grateful for this experience and will always be ready to do such service again in the future. This not only helped someone get a little closer to their goals but also taught me to be pragmatic and become a better version of myself. It taught me how to be responsible towards something and work for a bigger cause.</p>
        </Container>
    );
}

export default Blog2;