module.exports = (mongo) => {
	const collection = { USERS: 'users', BLOGS: 'blogs', VIDEOS: 'videos' }
	const collectionData = require('./service/api')(mongo)
	
	const blog = require('./service/collections')(collectionData, collection.BLOGS)
	const video = require('./service/collections')(collectionData, collection.VIDEOS)
	const user = require('./service/collections')(collectionData, collection.USERS)

	return {
		blog,
		video
	}
}