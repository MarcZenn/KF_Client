# Kickfurther Isomorphic React Client


1. This project requires Node version 5.11.1 which you can install [here](https://nodejs.org/en/download/releases/)
2. Clone down project and run > npm install.
3. To run in a browser run > npm start
from root. Be sure that your local NODE_ENV is not set to "production".
4. Go to > http://localhost:9090 in your browser.

## Configuring Webpack/WebpackDevServer
Assets for this project are served via webpack which allows for hotloading and live editing when developing.

## Running Tests
The unit tests are powered by chai and mocha.

# Name Isomorphic React Boilerplate


### Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax ([ES2015](http://babeljs.io/docs/learn-es2015/)+) via [Babel](http://babeljs.io/), Syntactically Awesome Style Sheets via [SASS](http://sass-lang.com/)<br>
&nbsp; &nbsp; ✓ Component-based UI architecture via [React](http://facebook.github.io/react/), [Webpack](https://webpack.github.io/)
&nbsp; &nbsp; ✓ Application state management /w time-travel debugging via [Redux](http://redux.js.org/) (see [`main.js`](main.js), [`core/store.js`](core/store.js))<br>
&nbsp; &nbsp; ✓ Routing and navigation via [`react-router`](https://github.com/ReactTraining/react-router/tree/master/docs<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading via [Webpack](https://webpack.github.io/) and [ES6 System.import()](http://www.2ality.com/2014/09/es6-modules-final.html)<br>
&nbsp; &nbsp; ✓ Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Cross-device testing with [Browsersync](https://browsersync.io/) (see [`run.js#start`](run.js))<br>
&nbsp; &nbsp; ✓ Optional Production Server Side Rendering see below.


### Getting Started

**Step 1**. Make sure that you have [Node.js](https://nodejs.org/) v6 or newer installed on your machine.

**Step 2**. Clone this repository

```shell
$ npm install                  # Install project dependencies listed in package.json
```

**Step 3**. Compile and launch your app by running:

```shell
$ npm start                    # Same as `npm start` or `node run start`
```

You can also test your app in release (production) mode by running `node run start --release` or
with HMR and React Hot Loader disabled by running `node run start --no-hmr`. The app should become
available at [http://localhost:9090/](http://localhost:9090/).

### Customizing Styles

SASS mixins,variables, & 3rd party style libraries can be customized in

```shell
public/stylsheets/
```
SASS view styles can be customized in

```shell
resources/assets/scss/
```

### Mock Data

Mock API Endpoints are in the public/data directory

```shell
.
├── /public/                 # Shared or generic UI components
│   ├── /data/               # Button component
│   ├── ├── articles.json    # json endpoint
```

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ npm run lint                  # Check JavaScript and CSS code for potential issues
$ npm run test                  # Run unit tests. Or, `npm run test:watch`
```
