// import React with sugar on top
import React, {Component} from 'react';


// Components
import {Col, Row, Grid} from 'react-bootstrap/lib';
import Nav from '../.././Partials/Nav.jsx';
import Footer from '../.././Partials/Footer.jsx';


class About extends Component {
  render() {
    return(
      <section>
        <Nav />
        <div className="about-content">
          <img src="/public/images/skulls.png"  />
          <h1>Life</h1>
          <p className="about-copy">When you start at the bottom of a well you have to climb the usual ladders several rungs at a time. Nothing comes easy, there's no such thing as a safe outcome, plans always go awry and if you're not careful, you can easily become the victim of others' expectations. A victim of "you can't do that" or "I doubt you'll get there with your background" or "it's just too expensive". Ironically if I hadn't encountered such circumstances in my youth I don't think I'd be where I am today. These perspectives are nothing but false obstacles. False obstacles can give way to challenges, and challenges are meant to be overcome!</p>
          <p className="about-copy">It's my firm belief that no one succeeds by the combined efforts of themselves alone and that very few succeed without risk or the pursuit of overlooked value/opportunity. That success depends on how you define it as much as how you attain it and that success alone is not enough if it only benefits you.</p>
          <h1>Work</h1>
          <p className="about-copy">
            Experienced in object-oriented programming, agile, testing, debugging, refactoring & evaluating the full-stack. Hoping to dive into Ethereum Decentralization Platform, Augmented/Virtual Reality, Machine-Learning, Social E-commerce, AI, Wireless Energy Transfer....the list goes on and on really. For the time being I work for a startup as a Junior Developer and 9th team hire.
          </p>
          <h1>Play</h1>
          <p className="about-copy">These days I spend my time living and working in beautiful Boulder, Colorado enjoying my days as a web engineer and startup enthusiast. The rest of the time I'm pursuing something ridiculous, as my friends would say. The one thing I'd say my soul couldn't live without would be music...if I had any musical talent whatsoever I don't think I'd be coding today...maybe. But alas I have to settle for the occasional hike or road trip here and there, some fiddling around with D.A.W's and a good beer or two every now and then
           </p>
           <h1>Love</h1>
           <p className="about-copy">None ya....</p>
        </div>
        <Footer />
      </section>
    )
  }
}


About.propTypes = {
  // childVisible: React.PropTypes.bool.isRequired
}


export default About
