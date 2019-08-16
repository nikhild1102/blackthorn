const config = require('../config/app')

module.exports = {
  development: {
    username: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.name'),
    host: config.get('db.host'),
    dialect: 'mysql'
  },
  staging: {
    username: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.name'),
    host: config.get('db.host'),
    dialect: 'postgres'
  }
}
