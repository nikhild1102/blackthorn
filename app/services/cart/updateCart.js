const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  cartId: {
    presence: { allowEmpty: false }
  },
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

class UpdateCart extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op          = Sequelize.Op;
    const data        = {};
    const cartId                  = this.cartId;
    data['userId']                = this.userId;
    data['shipping_address_id']   = this.shippingAddressId;
    data['billing_address_id']    = this.billingAddressId;
    data['discount']              = this.discount;
    data['taxes']                 = this.taxes;
    data['shipping_amount']       = this.shippingAmount;
    data['total_amount']          = this.totalAmount;
    data['contact_no']            = this.contactNo;
    data['coupon_id']             = this.couponId;

    const cart = await db.cart.findOne({
      where : {
        id : cartId
      }
    })
    const cartObj = await cart.update(data);
      
    return { message: 'cart updated successfully.' }
  }
}

module.exports = UpdateCart;