const db = require("../models")
const Category = db.category

const handleError = (res, err) => {
    res.status(500).send({
        message:
            err.message
    })
}

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
            handleError(res, err)
        })
}

exports.findAll = (req, res) => {
    const name = req.query.name
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" }} : {}

    Category.find(condition)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            handleError(res, err)
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Category.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "FINDONE No category with id " + id })
            else res.send(data)
        })
        .catch(err => {
            handleError(res, err)
        })
}

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No updates specified in request"
        })
    }

    const id = req.params.id

    Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false, runValidators: true })
        .then (data => {
            if (!data)
                res.status(404).send({ message: "UPDATE No category with id " + id })
            else res.send( { message: "Category updated successfully" } )
        })
        .catch (err => {
            handleError(res, err)
        })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Category.findByIdAndRemove(id)
        .then(data => {
            if (!data) 
                res.status(404).send({ message: "DELETE No category with id " + id })
            else res.send( { message: "Category removed successfully" } )
        })
        .catch (err => {
            handleError(res, err)
        })
}