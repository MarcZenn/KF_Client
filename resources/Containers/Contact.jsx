// Import React
import React, {Component} from 'react';

// Import react-redux connect to forge connection between react and redux.
import {connect} from 'react-redux';

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Nav from '.././Components/Partials/Nav.jsx';
import Footer from '.././Components/Partials/Footer.jsx';

class Contact extends Component {

  constructor() {
    // Super() simply allows us to call methods defined on any parent Components of this Component
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  render(){
    return (
      <section>
        <Nav />
        <div className="contact-content">
          <form className="home-contact-form text-center" onSubmit={this.onSubmit.bind(this)}>
            <h2>Shoot me an email</h2>
            <p>Fill out the fields below and press the SUBMIT button. I will respond to your query after an appropriate amount of quiet contemplation. Thank you for getting in touch!</p>
            <label>Name:</label>
            <input type="text" ref="name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/><br />
            <label>Email:</label>
            <input type="text" ref="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/><br />
            <label>Subject:</label>
            <input type="text" ref="subject" name="subject" value={this.state.subject} onChange={this.handleChange.bind(this)}/><br />
            <label>Message:</label>
            <textarea id="text" rows="1" ref="message" name="message" value={this.state.message} onChange={this.handleChange.bind(this)}></textarea><br /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Footer />
      </section>
    )
  }

  handleChange(e) {
    // Dynamically set controlled component, input value state.
    this.setState({[e.target.name]: e.target.value});

    // TODO:: handle robust form validation here....if it does not pass hide submit button else show.
  }

  onSubmit(e) {
    e.preventDefault();
    this.sendEmail(this.state);
  }

  sendEmail(emailBody) {
    console.log(emailBody);

    // TODO:: send email body to sendgrid server
  }

}

function mapStateToProps() {

}



Contact.propTypes = {
  //
}


export default Contact
