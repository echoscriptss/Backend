const server = require('express')
const model = require('./Models/Note.model')

const app = server()
app.use(server.json())
/*
Post
Get
Delete
Patch
*/

app.get('/call', (req, res)=> {
    console.log('Print this')
    res.status(200).json({
        Message: "Success"
    })
})

app.post('/postNotes', async (req, res) => {
    const data = req.body
   await model.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({status:'Success', message: 'saved sexfully'})
})

app.get('/getallNotes', async(req, res) => {
    const allNotes = await model.find() //returns array or empty []

    res.status(200).json({
        status: "Success",
        data: allNotes
    })
})

app.get('/getoneNotes', async(req, res) => {
    const allNotes = await model.findOne({   // this will return object or null
        title: "Book1"
    }) //returns array []

    res.status(200).json({
        status: "Success",
        data: allNotes
    })
})

app.delete('/deleteNote/:id', async(req, res)=> {
    const noteid = req.params.id
   await model.findOneAndDelete({
        _id: noteid
    })
    res.status(201).json({
        status: "Success",
        //data: allNotes
    })
})

app.patch('/update/:id', async(req, res) => {
    const update = req.params.id
    const updateWith = req.body.description

   await model.findOneAndUpdate({
        _id: update
    }, {
        description: updateWith
    })
    res.status(201).json({
        status: "Success",
        //data: allNotes
    })

})


module.exports = app