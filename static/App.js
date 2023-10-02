'use strict';

var _reactBootstrap = require('react-bootstrap');

var contentNode = document.getElementById('root');
var component = React.createElement(
  _reactBootstrap.Button,
  { onClick: '' },
  'Placeholder'
); // A simple JSX component

ReactDOM.render(component, contentNode);