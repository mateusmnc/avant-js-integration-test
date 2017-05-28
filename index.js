const Hapi = require('hapi');
const config = require('./config');
const routes = require('./routes');
const mongoose = require('mongoose');
const winston = require('winston');

// Initialize mongo db connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database.url);

// Create Hapi server
const server = new Hapi.Server();
server.connection({
  port: config.server.port,
  host: config.server.host,
  router: {
    stripTrailingSlash: true
  }
});

// Import routes
server.route(routes);

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/docs/{param*}',
    handler: {
      directory: {
        path: 'public/docs'
      }
    }
  });
});

// Start Hapi server if not being imported
if (!module.parent) {
  server.start((err) => {
    if (err) throw err;
    winston.info(`Server running at: ${server.info.uri}`);
  });
}

module.exports = server;