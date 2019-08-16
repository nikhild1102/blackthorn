const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  cartId: {
    presence: { allowEmpty: false }
  }
}

class PlaceOrder extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op            = Sequelize.Op;
    
    const cart = await db.cart.findOne({
      where: {
        id: this.cartId
      }
    });

    const items = await db.cartItem.findAll({
      where: {
        cart_id: this.cartId
      }
    });
    
    const order = await db.order.create({
      user_id: cart.user_id,
      coupon_id: cart.coupon_id,
      shipping_address_id: cart.shipping_address_id,
      billing_address_id: cart.billing_address_id,
      discount: cart.discount,
      taxes: cart.taxes,
      shipping_amount: cart.shipping_amount,
      total_amount: cart.total_amount,
      status: 'Pending',
      contact_no: cart.contact_no
    })

    const order_id = order.id;

    if(items.length > 0) {
      for(var i=0; i<=items.length-1; i++) {
        await db.orderItem.create({
          product_id: items[i]['product_id'],
          order_id: order_id,
          quantity: items[i]['quantity'],
          price: items[i]['price']
        })
      }
    }

    await db.cartItem.destroy({
      where : {
        cart_id: this.cartId
      }
    });

    await db.cart.destroy({
      where : {
        id: this.cartId
      }
    });

    return { message : "Order placed successfully." }
  }
}

module.exports = PlaceOrder;