// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
const bands = require ('./controllers/bands_controllers')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//CONTROLLERS 
const bandsController = require('./controllers/bands_controllers')
app.use('/bands', bandsController, bands)

const eventsController = require('./controllers/events_controllers')
app.use('/events',eventsController)
// console.log('event found')

const stagesController = require('./controllers/stages_controllers')
app.use( '/stages', stagesController)
// console.log('stage found')

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})