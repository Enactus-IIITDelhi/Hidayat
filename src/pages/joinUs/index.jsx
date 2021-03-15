import React from 'react';
import Jumbo from './Banner';
import JoinTeam from './JoinTeam'
import Members from './Members';



function joinUs() {
    return (
        <>
            <Jumbo title="We welcome you all to the Hidayat family"  
                subtitle="We are an organisation that believes that there exists infinite potential within every young mind blossoming in our country, and we aim to enhance the quality of education, provide career counselling and promote the holistic development of students." 
                image="assets/joinUsPage/bannerImage.png"  />
            <Members />
            <JoinTeam />
        </>
    );
}

export default joinUs;