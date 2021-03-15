import React from 'react';
import Jumbo from './Jumbo';
import Content from "./Content"


function joinUs() {
    return (
        <>
            <Jumbo title="Our Mentorship Program"  
                subtitle="Our 7-week long mentorship program is carefully designed  to help students in classes 9 - 12 make informed decisions about their streams and career paths and not be held back due to lack of resources. The students will be allotted experienced mentors for weekly interactive sessions filled with informative talks, enlightening video screenings, fun-filled activities, guided testing including Value, Personality and Aptitude tests as well as insightful analysis of their results." 
                image="assets/Mentorship/header.jpg"  />
            <Content />

        </>
    );
}

export default joinUs;