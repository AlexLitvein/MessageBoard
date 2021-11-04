// Browser Code

const React = require('react')
const ReactDOM = require('react-dom')

const Header = require('../components/header.jsx')
const Footer = require('../components/footer.jsx')
const MessageBoard = require('../components/board.jsx')

ReactDOM.hydrate(<Header />, document.getElementById('header'))
ReactDOM.hydrate(<Footer />, document.getElementById('footer'))
ReactDOM.hydrate(<MessageBoard messages={messages}/>, document.getElementById('message-board'))
