'use strict';

var React = require('react/addons');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello Good {this.props.name}</div>;
  }
});

module.exports = HelloMessage;
