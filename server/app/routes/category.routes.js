module.exports = app => {
    const category = require("../controllers/category.controller.js")

    var router = require("express").Router()

    //Create new category
    router.post("/", category.create)

    //Find all categories (optionally) by name
    router.get("/", category.findAll)

    //Find category by id
    router.get("/:id", category.findOne)

    //Update category with id
    router.put("/:id", category.update)

    //Delete category with id
    router.delete("/:id", category.delete)
    
    app.use("/api/categories", router)
}