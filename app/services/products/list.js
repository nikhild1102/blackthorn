const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {}

class ProductList extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op    = Sequelize.Op;
    const data  = {};
    
    const products = await db.product.findAndCountAll();
      
    return { products:products.rows, totalRecords:products.count }
  }
}

module.exports = ProductList;