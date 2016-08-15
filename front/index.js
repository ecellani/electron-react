/**
 * Created by Erick Cellani
 */
'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass({
    render: () => {
        var i = 4
        var message = `Hello ${i} you`
        return <h1>{message}</h1>
    }
})

ReactDOM.render(
    <Hello />,
    document.getElementById('example')
)
