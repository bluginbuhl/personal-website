import React, { Component } from 'react';

class About extends Component {
  render() {

    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Ben Luginbuhl Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <hr />
            <div className="row">
              <div className="columns download">
                <p className="main-col">You can download a current copy of my r&#233;sum&#233;/CV using the button below.</p>
                <ul>
                  <a href={resumeDownload} className="button" alt="" title="Neumorphic!"><i className="fa fa-download" alt=""></i>Download R&#233;sum&#233;</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
