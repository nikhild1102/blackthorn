const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  addressId: {
    presence: { allowEmpty: false }
  }
}

class GetAddress extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const Op    = Sequelize.Op;
    const data  = {};
    const addressId   = this.addressId;
    
    const address = await db.address.findOne({
      where : {
        id : addressId
      }
    });
      
    return { address }
  }
}

module.exports = GetAddress;