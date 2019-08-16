const Sequelize = require('sequelize')
const config = require('../config/app') 
const db = {};

const sequelize = new Sequelize(
  config.get('db.name'),
  config.get('db.user'),
  config.get('db.password'), {
  host: config.get('db.host'),
  port: config.get('db.port'),
  dialect: 'mysql',
  port: config.get('db.port'),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cart = require('../app/models/cart.js')(sequelize, Sequelize);
db.cartItem = require('../app/models/cart_item.js')(sequelize, Sequelize);
db.order = require('../app/models/order.js')(sequelize, Sequelize);
db.orderItem = require('../app/models/order_item.js')(sequelize, Sequelize);
db.address = require('../app/models/address.js')(sequelize, Sequelize);
db.product = require('../app/models/product.js')(sequelize, Sequelize);

db.cart.hasMany(db.cartItem, {foreignKey: 'cart_id'})
db.cartItem.belongsTo(db.cart, {foreignKey: 'id'})
db.cartItem.belongsTo(db.product, {foreignKey: 'id'})

module.exports = db;
