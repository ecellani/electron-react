/**
 * Created by Erick Cellani
 */

const Engine = {
    start: () => {
        const app = require('express')()

        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*")
            res.header("Access-Control-Allow-Methods", "*")
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            next()
        })

        const backendPort = 3333
        app.listen(backendPort, () => console.log('Application server running at (port:%s)...', backendPort))

        app.get('/check', (req, res) => {
            console.log('chamou!')
            res.json({status: 'OK'})
        })
    }
}
module.exports = Engine
