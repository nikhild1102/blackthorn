const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  shippingAddressId: {
    presence: { allowEmpty: false }
  },
  billingAddressId: {
    presence: { allowEmpty: false }
  },
  totalAmount: {
    presence: { allowEmpty: false }
  },
  contactNo: {
    presence: { allowEmpty: false }
  }
}

class CreateCart extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op          = Sequelize.Op;
    const data        = {};
    data['userId']                = this.userId;
    data['shipping_address_id']   = this.shippingAddressId;
    data['billing_address_id']    = this.billingAddressId;
    data['discount']              = this.discount;
    data['taxes']                 = this.taxes;
    data['shipping_amount']       = this.shippingAmount;
    data['total_amount']          = this.totalAmount;
    data['contact_no']            = this.contactNo;
    data['coupon_id']             = this.couponId;

    const cartId = await db.cart.create(data);
      
    return { message: 'cart created successfully.' }
  }
}

module.exports = CreateCart;