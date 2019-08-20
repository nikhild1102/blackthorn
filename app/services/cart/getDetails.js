const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  cartId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  }
}

class GetDetails extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const cartId      = this.cartId;
    
    var cartDetails = await db.cart.findOne({
      where:{
        id: cartId
      },
      include:{
        model: db.cartItem,
        where: {
          cart_id: cartId
        },
        include:{
          model: db.product,
          on: { 'id' : {$col: 'product_id'}}
        }
      }
    });

    if(!cartDetails) {
      this.addError('cart','Cart id does not exists.');
      return;
    }

    return { cartDetails };
  }
}

module.exports = GetDetails;