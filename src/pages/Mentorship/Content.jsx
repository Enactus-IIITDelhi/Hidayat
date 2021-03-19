import React from "react"
import {Button} from 'reactstrap';


function Content()
{
    return(<>
        <div>
            <h3 className="text-main-blue middle pl-5 pr-5 mt-2">
            “One child, one teacher, one book and one pen can change the world.” 
            </h3>
            <h4 className="middle pl-5 pr-5 mb-4">   
                ― Malala Yousafzai
            </h4>
            <div className="middle">
                <Button className="bg-main-blue pl-5 pr-5  mt-3 mb-3" style={ {border:"0px"}} size="lg" > <span style={{fontWeight:"500"}}>Mentorship Program</span></Button>
            </div>

            <div className="row m-0">
            <div className="col-md-5 col-12  offset-md-1 pl-5 pr-5 pr-md-3 pl-md-3 pb-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-right" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Class 9 - 10</span></Button>
                <br></br>         
                <div className="rightDiv pt-1 pr-1 pl-1 ">
                    <p className="p-2">
                    For class 9-10 students, the program will introduce the mentees to various course options available (Intermediate, Polytechnic, ITI, Paramedical or Short Term) and discuss steps for a proper start in each field. This will include a number of guided aptitude and interest tests, exposure activities and information about various scholarships. This program will help them experience each stream and eventually come to the best decision.
                    </p>
                </div>          

            </div>

            <div className="col-md-5 col-12 pb-2  pl-5 pr-5 pr-md-3 pl-md-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-left" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Class 11 - 12</span></Button>
                <br></br>
                <div className="leftDiv pt-1 pr-1 pl-1">
                        <p className="p-2">
                        Students of class 11-12th will be offered a career-based aptitude test followed by sessions on what paths one can take. Updates and information about various examinations, universities, scholarships, admission process, job options will be shared. This program will help provide them with an insight into the transition from school to college life and attempt to bridge the gap between textbooks and the real world.
                        </p>

                </div>   

            </div>
            <div className="col-md-1 col-0">

            </div>

        </div>
        <div className="middle mt-5  pb-5">
                <Button className="bg-main-blue pl-5 pr-5 middle" style={ {borderRadius:"30px", border:"0px"}} size="lg" > Apply here  </Button>
            </div>


        </div>
    </>);
}
export default Content;