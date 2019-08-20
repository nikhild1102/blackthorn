const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
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
  },
  discount: {
    numericality: {}
  },
  taxes: {
    numericality: {}
  },
  shippingAmount: {
    numericality: {}
  },
  totalAmount: {
    numericality: {}
  },
  couponId: {
    numericality: {
      onlyInteger: true
    }
  }
}

class CreateCart extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
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
      
    return { message: 'cart created successfully.', cartId: cartId.id }
  }
}

module.exports = CreateCart;