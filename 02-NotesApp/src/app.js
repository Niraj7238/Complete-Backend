//  server ko create krna kam h ---> app.js

const express = require('express')

const app = express()
app.use(express.json()) // middlewere

const notes = []
// post

app.post('/notes', (req , res) => {
    notes.push(req.body)

    res.status(201).json({
        message : "note created sucess"
    })

})

// get

app.get('/notes',(req,res) =>{
    res.status(200).json({
        message: "notes fetch susses",
        notes:notes
    })

})


// Delete

app.delete('/notes/:index', (req,res)=>{

    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message: "note delete sucess"
    })

})

// patch

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const description = req.body.description;

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    notes[index].description = description;

    res.status(200).json({
        message: "Note updated successfully",
        note: notes[index]
    });
});









module.exports = app