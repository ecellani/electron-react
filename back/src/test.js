const http = require('http')
try {
    let options = {
        hostname: 'localhost',
        port: 3333,
        path: '/check',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(`options: ${JSON.stringify(options)}`)
    var req = http.request(options, (res) => {
        console.log(`status code: ${res.statusCode}`)
        res.on('data', (chunk) => {
            console.log(`chuck: ${chunk}`)
        })
    })
    req.on('error', (e) => {
        let message = `Error: ${e}`
        console.log(`message: ${message}`)
    })
    req.end()
} catch (ex) {
    console.error(ex)
}
