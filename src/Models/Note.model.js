const mongoos = require('mongoose')

// Now create schema

const noteModelSchema = new mongoos.Schema({
    title: String,
    description: String
})

// Now Create model

const noteModel = mongoos.model('Note',noteModelSchema)

module.exports = noteModel