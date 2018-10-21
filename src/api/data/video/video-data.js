module.exports = (video, requester) => {
    return {
        getAll: () => {
            return requester.getAll(video)
        }
    }
}