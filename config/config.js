var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'dummy-service'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/dummy-service-development',
    storage: rootPath + '/data/dummy-service-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'dummy-service'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/dummy-service-test',
    storage: rootPath + '/data/dummy-service-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'dummy-service'
    },
    port: process.env.PORT || 3000,
    db: 'sqlite://localhost/dummy-service-production',
    storage: rootPath + 'data/dummy-service-production'
  }
};

module.exports = config[env];
