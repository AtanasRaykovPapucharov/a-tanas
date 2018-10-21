module.exports.init = (mongoose) => {
    const Schema = mongoose.Schema
    const ObjectId = Schema.ObjectId

    const user = new Schema({
        _id: ObjectId,
        section: String,
        subsection: String,
        title: String,
        subtitle: String,
        video: String,
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

    const User = mongoose.model('User', user)
    return User
}