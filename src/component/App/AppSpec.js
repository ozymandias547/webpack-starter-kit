var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var App = require("./App.jsx");

describe("App Component Suite", function() {
	
	var component;
	
	beforeEach(function() {
		component = TestUtils.renderIntoDocument(<App />);
	})

	it("it should render without any issues", function() {
		expect(component).toBeDefined();
	})
	
})