import React from 'react';
import Jumbo from './Jumbo';
import Problem from "./Problem"
import Initiative from "./Initiatives"

function About() {
    return (
        <>

            <Jumbo />
            <div>
            <h3 className="text-main-blue middle pl-5 pr-5 mt-5">
            “Tell me and I forget, teach me and I may remember, involve me and I learn.” 
            </h3>
            <h4 className="middle ml-5 pr-5 pb-5">   
                ― Benjamin Franklin
            </h4>
            <Problem/>
            <Initiative/>

        </div>

        </>
    );
}

export default About;