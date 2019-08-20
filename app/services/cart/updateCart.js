const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  cartId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  shippingAddressId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  billingAddressId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  },
  totalAmount: {
    presence: { allowEmpty: false },
    numericality: {}
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

    if(!cart) {
      this.addError('cart','Cart id does not exists.');
      return;
    }

    const cartObj = await cart.update(data);
      
    return { message: 'cart updated successfully.' }
  }
}

module.exports = UpdateCart;