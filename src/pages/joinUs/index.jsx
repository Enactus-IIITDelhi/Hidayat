import React from 'react';
import Jumbo from './Banner';
import JoinTeam from './JoinTeam'
import Members from './Members';



function joinUs() {
    return (
        <>
            <Jumbo title="Lorem ipsum dolor sit amet, consecteturadipiscing elit."  
                subtitle="Lorem ipsum dolor sit amet, conse cteturadipiscing elit. Etiam quis sapien vitae mauris interdum Lorem ipsum dolor sit amet, conse cteturadipiscing elit. Etiam quis sapien vitae mauris interdum" 
                image="assets/joinUsPage/BannerImage.png"  />
            <Members />
            <JoinTeam />
        </>
    );
}

export default joinUs;