/* global describe, beforeEach, it, expect */
'use strict';

var TestUtils = require('react/lib/ReactTestUtils');
var App = require('./App.jsx'); //jshint ignore:line
var React = require('react'); //jshint ignore:line
var jasmineReact = require('jasmine-react-helpers');

describe('App Component Suite', function() {

  var component;

  beforeEach(function() {
    component = TestUtils.renderIntoDocument(<App />); // jshint ignore:line
  });

  it('it should render without any issues', function() {
    expect(component).toBeDefined();
  });

  it('it should instantiate the App properly', function() {
    expect(jasmineReact.render(<App/>, document.body)).toBeDefined(); // jshint ignore:line
  });
});
