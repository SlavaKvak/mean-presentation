var express = require('express'),
	expressConfig = require('./server/config/express'),
	mongooseConfig = require('./server/config/mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];
expressConfig(app, config);
mongooseConfig(config);

var passportConfig = require('./server/config/passport');
passportConfig();
var routesConfig = require('./server/config/routes');
routesConfig(app);

app.listen(config.port);

console.log('Listening port:' + config.port + ' ...');