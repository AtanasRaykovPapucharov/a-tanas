module.exports.init = (mongoose) => {
    const Schema = mongoose.Schema
    const ObjectId = Schema.ObjectId

    const blog = new Schema({
        _id: ObjectId,
        language: String,
        section: String,
        subsection: String,
        title: String,
        subtitle: String,
        image: String,
        content: String,
        tagField: String,
        tags: [String],
        comments: [Object],
        looks: Number,
        likes: Number,
        date: Date,
        author: String
    })

    const Blog = mongoose.model('Blog', blog)
    return Blog
}