import React from 'react';
import Jumbo from './Jumbo';
import Content from "./Content"


function joinUs() {
    return (
        <>
            <Jumbo title="Our Mentorship Program"  
                subtitle="We have designed an enriching mentorship program spanning 7 weeks to help students in classes 9th to 12th make informed decisions about their streams, branches and career paths and not be held back due to lack of resources. Students i.e. the mentees for this program will be allotted experienced mentors for weekly interactive sessions filled with informative talks, healthy discussions on career related topics, enlightening video screenings, fun-filled activities, guided testing including Value, Personality and Aptitude tests from verified sources as well as insightful analysis of their results. " 
                image="assets/Mentorship/header.jpg"  />
            <Content />

        </>
    );
}

export default joinUs;