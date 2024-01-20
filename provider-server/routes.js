const express = require('express')
const runWebhook = require('./event')

const routes = express.Router()

routes.get('/', (req, res) => {
    runWebhook({
        consumerId: 1,
        event: 'fetch_request',
        data: {}
    })
    res.json('provider work!')
})

routes.post('/customer', (req, res) => {
    runWebhook({
        consumerId: 1,
        event: 'customer_created',
        data: {
            id: req.body.customerId,
            // more data
        }
    })
    res.json('provider customer create work!')
})

routes.get('/customer', (req, res) => {
    res.json('provider customer fetch work!')
})

routes.delete('/customer/:customerId', (req, res) => {
    res.json('provider customer delete work!')
})

routes.put('/customer/:customerId', (req, res) => {
    res.json('provider customer update work!')
})

module.exports = routes