//Dependencies 
const events = require('express').Router()
const et = require('../models')
const { Events } = et

// Find All Bands
events.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.findAll({
            order: [ [ 'available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            }
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A event
events.post('/', async (req, res) => {
    try {
        const newEvents = await Events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvents
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Events.update(req.body, {
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} Event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Events.destroy({
            where: {
                events_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//Export
module.exports = events