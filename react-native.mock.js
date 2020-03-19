const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');
const path = require('path');
const components = require(path.resolve('./mock'));

const createClass = (type) =>{
  return createReactClass({
    displayName: type,
    propTypes: {
      children: PropTypes.node
    },
    render:()=>{} 
  });
}

const mockObjects = {}
components.map(it=>{mockObjects[it]=createClass(it)});

module.exports = mockObjects;