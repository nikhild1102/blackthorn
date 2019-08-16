const convict = require('convict')
const config = convict({
  env: {
    doc: "The application environment",
    format: ["development", "production"],
    default: "development",
    env: "NODE_ENV"
  },
  db:{
    host: {
      doc: "DB host",
      format: String,
      default: "localhost",
      env: "DB_HOST"
    },
    name: {
      doc: "DB name",
      format: String,
      default: "shop",
      env: "DB_NAME"
    },
    user: {
      doc: "DB user",
      format: String,
      default: "root",
      env: "DB_USER"
    },
    password: {
      doc: "DB passsword",
      format: String,
      default: "12345678",
      env: "DB_PASSWORD"
    },
    port: {
      doc: "DB port",
      format: String,
      default: "3306",
      env: "DB_PORT"
    }
  },
  app:{
    name: {
      doc: "App name",
      format: String,
      default: "Blackthorn",
      env: "APP_NAME"
    }
  },
  port: {
    doc: "Application port",
    format: String,
    default: "12345",
    env: "PORT"
  },
  log:{
    level: {
      doc: "Log level",
      format: String,
      default: "debug",
      env: "LOG_LEVEL"
    },
  },
})
config.validate({ allowed: 'strict' })
module.exports = config
