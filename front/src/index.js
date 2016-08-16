/**
 * Created by Erick Cellani
 */
'use strict'

try {
    const http = require('http')
    const React = require('react')
    const ReactDOM = require('react-dom')

    const Hello = React.createClass({
        render: function () {
            var i = this.props.index
            var message = `Hello ${i} you`
            return <h1>{message}</h1>
        }
    })

    let $i = 0
    setInterval(() => {
        ReactDOM.render(
            <Hello index={$i++} />,
            document.getElementById('example'));
    }, 100)

    const HttpCaller = React.createClass({
        getInitialState: function () {
            return {
                test: ''
            }
        },

        componentDidMount: function () {

            var component = this
            let options = {
                hostname: 'localhost',
                port: 3333,
                path: '/check',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            this.serverRequest =require('http').get(options, function (res) {
                res.on('data', function(chunk) {
                    console.log(`chunk: ${chunk}`)
                    component.setState({
                        test: chunk.toString()
                    })
                }.bind(this))
            }).end()

            // Forcing works fine
            // this.setState({test: 'forced ok'})
        },

        componentWillUnmount: function () {
            console.log('this.serverRequest.abort() --> NOT CALLED')
            this.serverRequest.abort()
        },

        render: function () {
            console.log(`render: ${JSON.stringify(this.state)}`)
            return (
                <p>{this.state.test}</p>
            )
        }
    })

    ReactDOM.render(
        <HttpCaller source='localhost:3333/check' />,
        document.getElementById('httpRequestResult')
    )

} catch (ex) {
    console.error(ex)
}
