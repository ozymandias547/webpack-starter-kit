var domready = require('domready');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./component/App/App.jsx');
require('./scss/base.scss');

domready(function () {
	ReactDOM.render(<App />, document.querySelector(".reactApp"));
});

module.exports = App;