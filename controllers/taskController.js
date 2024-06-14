const mongoose = require('mongoose')
const tasks = require('../models/tasks')
const express = require('express')
const router = express.Router()
router.post('/add', async (req, res) => {
  try {
    console.log('req.body:', req.body)
    const task = new tasks({
      title: req.body.title,
      stats: req.body.stats,
    })

    const doc = await task.save()
    res.status(201).json(doc) // Use status code 201 for resource creation
  } catch (err) {
    console.error('Error in task save:', err)
    res.status(500).json({ error: 'Internal Server Error' }) // Use status code 500 for internal server error
  }
})
router.post('/update/:id', async (req, res) => {
  try {
    const doc = await tasks.findByIdAndUpdate(
      req.params.id,
      {
        stats: req.body.stats,
      },
      { new: true }
    )
    res.status(200).json(doc)
  } catch (err) {
    console.error('Error in task update:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/list', async (req, res) => {
  try {
    const docs = await tasks.find()
    res.status(200).json(docs)
  } catch (err) {
    console.error('Error in task list:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
router.delete('/delete/:id', async (req, res) => {
  try {
    const doc = await tasks.findByIdAndDelete(req.params.id)
    res.status(200).json(doc)
  } catch (err) {
    console.error('Error in task delete:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
