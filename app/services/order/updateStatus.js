const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  orderId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
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
    const orderId       = this.orderId;
    const status        = this.status;
    
    const order = await db.order.findOne({
      where: {
        id: orderId
      }
    });

    if(!order) {
      this.addError('order','Order id does not exists.');
      return;
    }

    await order.update({status:status});

    return { message : "Order status updated successfully." }
  }
}

module.exports = PlaceOrder;