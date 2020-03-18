const React = require("react");
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

const createClass = (type) =>{
  return createReactClass({
    displayName: type,
    propTypes: {
      children: PropTypes.node
    },
    render:()=>{} 
  });
}

module.exports = {
  View: createClass("View"),
  Text: createClass("Text"),
  Button: createClass("Button"),
};