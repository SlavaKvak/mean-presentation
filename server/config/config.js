var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://quake:multivisionquake@ds057000.mongolab.com:57000/multivisionquake',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};