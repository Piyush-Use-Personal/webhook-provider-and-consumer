const events = require('events');
const axios = require('axios');
const eventEmitter = new events.EventEmitter();

// consider this a database
const datastore = [
    {
        url: 'http://localhost:8080/webhook',
        id: 1
    },
    // more consumer webhooks
]

const webhookEventHandler = function (payload) {
    const consumer = datastore.find(data => {
        if (data.id === payload.consumerId) {
            return true
        }
    })
    // add more conditions like specific events etc
    axios.post(consumer.url, payload)
        .then(() => console.log('success'))
        .catch(err => console.log('failed: ', err))
}

eventEmitter.on('webhook', webhookEventHandler);

const runWebhook = (payload) => {
    eventEmitter.emit('webhook', payload)
}

module.exports = runWebhook