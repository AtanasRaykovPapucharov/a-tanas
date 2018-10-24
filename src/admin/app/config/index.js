const constants = require('./constants.json')

module.exports = {
	development: {
		db: constants.mongodbConnection || 'mongodb://localhost:27017/appdb',
		port: 3336,
		transporterConnectionString: constants.transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name'
	},
	production: {
		db: constants.mongodbConnection,
		port: process.env.PORT,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME
	}
}
