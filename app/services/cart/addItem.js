const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  productId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  cartId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  quantity: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  price: {
    presence: { allowEmpty: false },
    numericality: {}
  }
}

class AddItem extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data          = {};
    data['product_id']   = this.productId;
    data['cart_id']      = this.cartId;
    data['quantity']    = this.quantity;
    data['price']       = this.price;
    
    await db.cartItem.create(data);
      
    return { message : "Item successfully added to cart." }
  }
}

module.exports = AddItem;