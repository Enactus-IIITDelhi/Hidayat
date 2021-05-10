import React from 'react';

function Contact(){
  return(
    <div className="container-fluid pt-5 pb-3">
      <div className="row m-auto ">
        <div className="col-11 offset-1 col-md-5 p-0">
          <h2 className="text-main-blue m-0 p-0 text-left" >Social Media</h2>
          <hr className="ruler pull-left m-0 mt-2 w-50" />
          <br></br>
        </div>

        <div className="col-12 col-md-10 offset-md-1 p-0">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe title="insta" frameborder="0" 
              src="https://hadron43.github.io/hidayat-insta/" 
              className="embed-responsive-item w-100"
            ></iframe>
          </div>
        </div>
    </div>
    </div>
  )
}
export default Contact;
