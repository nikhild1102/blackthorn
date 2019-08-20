const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
	pageSize: {
		numericality: {
     	onlyInteger: true,
     	lessThanOrEqualTo: 100
    }
	},
	pageNo: {
		numericality: {
      onlyInteger: true
    }
	}
}

class ProductList extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data  	= {};
    const pageNo 	= (this.pageNo) 	? this.pageNo 	: 1 ;
    const pageSize 	= (this.pageSize) 	? this.pageSize : 10 ;
    
    const products = await db.product.findAndCountAll({
    	offset: (pageNo - 1) * pageSize,
      	limit: parseInt(pageSize)
    });
      
    return { products:products.rows }
  }
}

module.exports = ProductList;