import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic"  src={profilepic} alt="Ben Luginbuhl Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            {/* <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span><a className="smoothscroll" href="#contact">Contact Me</a></span>
              </p>
            </div> */}
            <div className="columns download">
              <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default About;
