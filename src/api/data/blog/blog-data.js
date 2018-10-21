module.exports = (blog, requester) => {
    return {
        getAll: () => {
            return requester.getAll(blog)
        }
    }
}