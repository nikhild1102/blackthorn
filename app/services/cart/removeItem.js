const ServiceBase = require('../base')
const Sequelize = require('sequelize')
const db = require('@server/sequelizeNew')

const constraints = {
  itemId: {
    presence: { allowEmpty: false },
    numericality: {
      onlyInteger: true
    }
  }
}

class RemoveItem extends ServiceBase {
  get constraints () {
    return constraints
  }

  async run () {
    const data    = {};
    const itemId  = this.itemId;
    
    await db.cartItem.destroy({
      where : {
        id: itemId
      }
    });
      
    return { message : "Item successfully removed to cart." }
  }
}

module.exports = RemoveItem;