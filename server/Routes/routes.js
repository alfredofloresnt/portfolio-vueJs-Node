var express = require('express')
var app = express();
var Model = require('../Models/curriculm')


app.get("/", function (req, res) {
    res.send("<h1>API</h1>")
})

app.get("/info", function (req, res) {
    Model.getInfo((data)=>{
        res.json({info: data})
    })
})

app.get("/experience", function (req, res) {
    Model.getExperience((data)=>{
        res.json({experience: data})
    })
})

app.get("/skills", function (req, res) {
    Model.getSkills((data)=>{
        res.json({skills: data})
    })
})

app.get("/projects", function (req, res) {
    Model.getProjects((data)=>{
        res.json({projects: data})
    })
})

app.post("/contact", function (req, res) {
    let email = req.body.email;
    let message = req.body.message;
    Model.postContact(email, message, (data)=>{
        res.json({contactSent: true})
    })
})

module.exports = app;
