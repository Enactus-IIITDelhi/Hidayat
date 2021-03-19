import React from "react"
import {Button} from 'reactstrap';


function Initiative()
{
    return (<>
        <h2 className="mt-5 pb-5 text-main-blue middle">Initiatives</h2>
        <div className="row m-0">
            <div className="col-md-5 col-12  offset-md-1 pl-5 pr-5 pr-md-3 pl-md-3 pb-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-right" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Initiative 1</span></Button>
                <br></br>         
                <div className="rightDiv pt-1 pr-1 pl-1 ">
                    <p className="p-2">
                    Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatu Mollit vt. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptat. 

                    </p>
                </div>          

            </div>

            <div className="col-md-5 col-12 pb-2  pl-5 pr-5 pr-md-3 pl-md-3">
            <Button className="bg-main-blue pl-5 pr-5 pull-left" style={ {border:"0px"}} size="md" > <span style={{fontWeight:"bold"}}>Initiative 2</span></Button>
                <br></br>
                <div className="leftDiv pt-1 pr-1 pl-1">
                        <p className="p-2">
                        Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi Mollit veniam id non officia deserunt sint. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatu Mollit vt. Ullamco elit laborum pariatur tempor dolore deserunt ullamco elit est eu veniam nulla pariatur id. Nisi voluptat. 

                        </p>

                </div>   
                <Button className="bg-main-blue pl-5 pr-5 pull-right mt-3" style={ {border:"0px"}} size="lg" > <span style={{fontWeight:"500"}}>More coming soon</span></Button>

            </div>
            <div className="col-md-1 col-0">

            </div>

            <div>
                
                </div>

        </div>


    </>);
}
export default Initiative;