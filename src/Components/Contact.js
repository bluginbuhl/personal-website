import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
      
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div id="message-warning">Sorry, this is not currently implemented! Please email me directly at ben.luginbuhl@gmail.com</div>
        <div id="message-success">
          <i className="fa fa-check"></i>Your message was sent, thank you!<br />
        </div>
      </section>
    );
  }
}

export default Contact;
