module.exports = (user, requester) => {
    return {
        getAll: () => {
            return requester.getAll(user)
        }
    }
}