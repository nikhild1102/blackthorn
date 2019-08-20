const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  street1: {
    presence: { allowEmpty: false }
  },
  city: {
    presence: { allowEmpty: false }
  },
  state: {
    presence: { allowEmpty: false }
  },
  country: {
    presence: { allowEmpty: false }
  },
  zip: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  }
}

class AddAddress extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data        = {};
    data['street1']   = this.street1;
    data['street2']   = this.street2;
    data['city']      = this.city;
    data['state']     = this.state;
    data['country']   = this.country;
    data['zip']       = this.zip;
    
    
    await db.address.create(data);
      
    return { message : "Address added to cart." }
  }
}

module.exports = AddAddress;