const Edit = require('../models/editStatusModel')

const getEditStatus = async (req, res) => {
    try {
        const editStatus = await Edit.find({
            finished: '12/31/9999'
        })
        res.status(200).json(editStatus)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const createEditStatus = async (req, res) => {
    const {
        user,
        started,
    } = req.body
    try {
        await Edit.create({ user, started })
        res.status(201).send('created.')
        setTimeout(() => {
            updateEditStatus(req, res)
        }, 3600000)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateEditStatus = async (req, res) => {
    const { 
        finished,
        user
    } = req.body
    try {
        const edits = await Edit.find({user})
        const ids = edits.filter(e => {
            return new Date(e.finished).toString() === new Date('12/31/9999').toString()
        }).map(edit => edit._id)
        await Edit.updateMany(
            { _id: { $in: ids } },
            { finished: finished }
        )
        res.status(200).json({ message: 'Edit status updated' })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {
    getEditStatus,
    createEditStatus,
    updateEditStatus
}