// TODO: Create basic nav and footer
// TODO: place server.js in root
// TODO: delete api filder
// TODO: uninstall mongoose
// TODO: figure out how to use something other than express
// TODO: figure out how to use redux in regards to kf app state
// TODO: confirm if webpack implementation follows best practices.
// TODO: no need for express routes
// TODO: uninstall font awesome
// TODO: remove all styles
// TODO: remove cookie code and uninstall


// Import React
import React, {Component} from 'react';

// Front-end session data
import cookie from 'react-cookie';

// Google Fonts Package. - For new fonts add to array.
const WebFont = require('webfontloader');
 WebFont.load({
   google: {
     families: ['Raleway', 'Roboto Condensed', 'Bungee Hairline']
   }
 });

// Master Styles
require('../assets/scss/app.scss');



// Outermost Parent Component
class App extends Component {
  // Set cookies on the front-end only. For Auth protected back-end routes use JWT Tokens...
  constructor() {
    super()
    // this.state =  { userRevisit: cookie.load('true') };
  }

  componentWillMount() {
    console.log(reactCookie.setRawCookie('setRawCookie'));
    // cookie.save('userRevisit', userRevisit, { path: '/'});
      // this.setState({userRevisitId});
      // var date = new Date();
      // var time = date.getTime();
      // time += 3600 * 1000;
      // date.setTime(time);
      // var exp = date.toGMTString();
      //
      // cookie.save('userRevisitId', userRevisitId, {
      //   path : '/',
      //    exp:date.toUTCString()
      //  })


      var ass = cookie.load('userRevisit');
      console.log(ass)
      console.log(cookie.userRevisit)
  }

  render(){
    return (
    <section className="main-body">
      {this.props.children}
    </section>
    )
  }
}

export default App
