const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json('consumer work!')
})

routes.post('/webhook', (req, res) => {
    console.log('webhook works!')
    console.log('with following payload: ', req.body)
    // perform any operation that your want
    // like updating your database record
    // sending email to your user
    // updating any other 3rd party application
    res.json('webhook works!')
})

routes.post('/customer', (req, res) => {
    res.json('consumer customer create work!')
})

routes.get('/customer', (req, res) => {
    res.json('consumer customer fetch work!')
})

routes.delete('/customer/:customerId', (req, res) => {
    res.json('consumer customer delete work!')
})

routes.put('/customer/:customerId', (req, res) => {
    res.json('consumer customer update work!')
})

module.exports = routes