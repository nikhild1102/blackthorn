const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
	productId: {
    	presence: { allowEmpty: false }
  	}
}

class ProductDetail extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op    = Sequelize.Op;
    const data  = {};
    const productId = this.productId;
    console.log(productId)
    const product = await db.product.findOne({
      where: {
    	 id: productId
      }
    });
      
    return { product }
  }
}

module.exports = ProductDetail;