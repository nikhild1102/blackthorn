const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  cartId: {
    presence: { allowEmpty: false }
  }
}

class GetDetails extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op          = Sequelize.Op;
    const cartId      = this.cartId;
    
    var cartDetails = await db.cart.findOne({
      where:{
        id: cartId
      },
      include:{
        model: db.cartItem,
        where: {
          cart_id: cartId
        }
      }
    });
    
    if(cartDetails.cart_items && cartDetails.cart_items.length > 0) {
      for(var i=0; i<=cartDetails.cart_items.length-1; i++) {
         let product = await db.product.findOne({
          where: {
            id: cartDetails['cart_items'][i]['product_id']
          }
        })
        cartDetails['cart_items'][i]['dataValues']['name'] = product['name'];
      }
    }  

    return { cartDetails }
  }
}

module.exports = GetDetails;