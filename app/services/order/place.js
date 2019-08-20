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

class PlaceOrder extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    
    const cart = await db.cart.findOne({
      where: {
        id: this.cartId
      }
    });

    if(!cart) {
      this.addError('cart','Cart id does not exists.');
      return;
    }

    const items = await db.cartItem.findAll({
      where: {
        cart_id: this.cartId
      }
    });
    
    const t = await db.sequelize.transaction();
    try {
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
      }, {transaction : t})

      const order_id = order.id;

      let orderItems = [];
      if(items.length > 0) {
        for(var i=0; i<=items.length-1; i++) {
          orderItems.push({
            product_id: items[i]['product_id'],
            order_id: order_id,
            quantity: items[i]['quantity'],
            price: items[i]['price']
          })
        }
      }

      await db.orderItem.bulkCreate(orderItems,{transaction : t})

      await db.cartItem.destroy({
        where : {
          cart_id: this.cartId
        }
      }, {transaction : t});

      await db.cart.destroy({
        where : {
          id: this.cartId
        }
      }, {transaction : t});
      
      t.commit();
      return { message : "Order placed successfully.", orderId: order_id }
    } catch (err) {
      t.rollback();
      this.addError('cart',err);
      return;
    }
  }
}

module.exports = PlaceOrder;