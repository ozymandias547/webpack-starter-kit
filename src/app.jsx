var domready = require('domready');
var React = require('react');
var ReactDOM = require('react-dom');
require('./scss/base.scss');

domready(function () {
  
	var App = React.createClass({
		render: function() {
			return (
				<div>
					hello there wow wowowo asdf
				</div>
			)
		}
	})


	ReactDOM.render(<App />, document.querySelector(".reactApp"));

})
