module.exports = mongoose => {
    const Category = mongoose.model(
        "category",
        mongoose.Schema({
            name: {
                type: String,
                required: true,
                maxLength: 30
            }
        },
        { timestamps: true },
        )
    )
    return Category
}
