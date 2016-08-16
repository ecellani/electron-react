/**
 * Created by Erick Cellani
 */
'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
try {
    const Hello = React.createClass({
        render: function () {
            var i = this.props.index
            var message = `Hello ${i} you`
            return React.DOM.p(null, message)
        }
    })

    let $i = 0

    setInterval(() => {
        ReactDOM.render(
            React.createElement(Hello, { index: $i++ }),
            document.getElementById('example'));
    }, 50)

} catch (ex) {
    console.error(ex)
}
