const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
	productId: {
    	presence: { allowEmpty: false },
      numericality: {
        onlyInteger: true
      }
  	}
}

class ProductDetail extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data  = {};
    const productId = this.productId;
    
    const product = await db.product.findOne({
      where: {
    	 id: productId
      }
    });

    if(!product) {
      this.addError('product','Product id does not exists.');
      return;
    }
      
    return { product }
  }
}

module.exports = ProductDetail;