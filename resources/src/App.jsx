// TODO: place server.js in root
// TODO: figure out how to use something other than express
// TODO: figure out how to use redux in regards to kf app state
// TODO: confirm if webpack implementation follows best practices.
// TODO: no need for express routes
// TODO: remove all styles
// TODO: replace favicon
// TODO: remove cookie code and uninstall
// TODO: create getting started readme and reference container/component pattern - https://medium.com/@learnreact/container-components-c0e67432e005#.qxhuqiw20


// Import React
import React, {Component} from 'react';

// Front-end session data
import cookie from 'react-cookie';


// Google Fonts Package. - For new fonts add to array.
// const WebFont = require('webfontloader');
//  WebFont.load({
//    google: {
//      families: ['Raleway', 'Roboto Condensed', 'Bungee Hairline']
//    }
//  });

// Master Styles
if(process.env.BROWSER) {
  require('../.././public/app.scss');
}


// Outermost Parent Component
class App extends Component {
  constructor() {
    super()
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
