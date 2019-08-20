const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  addressId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  }
}

class GetAddress extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data  = {};
    const addressId   = this.addressId;
    
    const address = await db.address.findOne({
      where : {
        id : addressId
      }
    });
    
    if(address) {
      return { address }
    } else {
      this.addError('address','Address id does not exists.');
      return;
    }

  }
}

module.exports = GetAddress;