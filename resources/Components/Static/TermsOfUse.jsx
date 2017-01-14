// Import React
import React, {Component} from 'react'

// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Spinner from '../.././Partials/Spinner.jsx';


class Resume extends Component {
  // Use ES6 constructor to add childVisible prop to Components state i.e. About Component and set to true. This sets a true state used to conditionally render any child components below specifically the UpgradingUI component.
  constructor() {
    // super simply allows us to call methods defined on any parent Components of this Component
    super();
    this.state = {
     childVisible: true,
   };
  }
  // Remove child component after 4 seconds and show parent component.
  componentDidMount(e) {
    setTimeout(function() {
      this.setState({childVisible: !this.state.childVisible});
    }.bind(this), 2000);
  }
  render(){
    return (
      <section>
        {
        // Ternary to show UpgradingUI child component for 4 seconds then show hidden parent component.
        this.state.childVisible ? <Spinner /> :
        <div className="resume-style">
          <div className="terminal-overlay"></div>
          <div className="terminal-scanline"></div>
          <div className="fallout-wrapper">
            <div className="resume-content clearfix">
              <header className="site clearfix">
                <div className="col one">
                  <img src="/public/images/text-logo-2.png"  />
                </div>
                <div className="col two">
                  <h1><br /> <b>M</b>erits <b>A</b>nalysis <b>R</b>eal-Time <b>C</b>omputer (M.A.R.C)</h1>
                  <p>---------------------------------------------------</p>
                  <p className="slogan">- Web Engineer, Tinkerer, Aspiring Social-Entrepreneur -</p>
                  <p className="resume-copy">System Administrator (SYSADMIN) - Marc Zenn</p>
                  <p className="resume-copy">Version 1.0.0 - Server 0089</p>
                  <p>Please pardon the dust. Site currently under construction.</p>
                </div>
              </header>
              <div className="description-content">
                <h2>Administrator Biography &amp; Official Under Taking  (A.B.O.U.T)</h2>
                <div>
                  <p className="resume-copy">When you start life at the bottom of a well you have to climb the usual ladders several rungs at a time. Nothing comes easy, there's no such thing as the expected outcome, plans often go awry and if you're not careful, you can easily become the victim of others' expectations. A victim of "you can't do that" or "I doubt you'll get there" or "it's just too expensive". But these perspectives are false obstacles. Ironically if I hadn't encountered such circumstances in my youth I don't think I'd be where I am today. False obstacles can give way to challenges, and challenges are meant to be overcome!</p>
                  <p className="resume-copy">These days I spend my time living and working in beautiful Boulder, Colorado enjoying my days as a web engineer and startup enthusiast. The rest of the time I'm pursuing the improbable or the impossible. When I was younger I felt this incredible pressure to not just succeed but to succeed in such a way that there would be little limit to how many people I could help in some regard. Since then I've realized no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity. That success depends on how you define it as much as how you attain it and that even if you manage to help just a handful of people, you're still accomplished.</p>
                </div>
              </div>
              <Row>
                  <div className="resume-social-bar">
                    <ul>
                      <Col md={4} xs={12}>
                        <li><a href="https://github.com/MarcZenn">Github</a></li>
                      </Col>
                      <Col md={4} xs={12}>
                        <li><a href="https://www.linkedin.com/in/marcosmartinez2">LinkedIn</a></li>
                      </Col>
                      <Col md={4} xs={12}>
                        <li><a href="">Google+</a></li>
                      </Col>
                    </ul>
                  </div>
              </Row>
            </div>
          </div>
        </div>
      }
      </section>
    )
  }
}

Resume.propTypes = {
  //
}


export default Resume
