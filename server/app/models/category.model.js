module.exports = mongoose => {
    const Category = mongoose.model(
        "tutorial",
        mongoose.Schema({
            name: String
        },
        { timestamps: true },
        )
    )
    return Category
}
