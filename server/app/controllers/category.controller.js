const db = require("../models")
const Category = db.category

exports.create = (req, res) => {
    const category = new Category({
        name: req.body.name
    })

    category
        .save(category)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            })
        })
}

exports.findAllByName = (req, res) => {
    const name = req.query.name
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" }} : {};

    Category.find(condition)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            })
        })
}

exports.findOne = (req, res) => {
    
}

exports.update = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}

exports.deleteAll = (req, res) => {
    
}