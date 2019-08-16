const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  orderId: {
    presence: { allowEmpty: false }
  },
  status: {
    presence: { allowEmpty: false }
  }
}

class PlaceOrder extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op            = Sequelize.Op;
    const orderId       = this.orderId;
    const status        = this.status;
    
    const order = await db.order.findOne({
      where: {
        id: orderId
      }
    });

    await order.update({status:status});

    return { message : "Order status updated successfully." }
  }
}

module.exports = PlaceOrder;