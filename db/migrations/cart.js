
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    coupon_id:{
      type: Sequelize.INTEGER
    },
    shipping_address_id: {
      type: Sequelize.INTEGER
    },
    billing_address_id: {
      type: Sequelize.INTEGER
    },
    discount: {
      type: Sequelize.FLOAT
    },
    taxes: {
      type: Sequelize.FLOAT
    },
    shipping_amount: {
      type: Sequelize.INTEGER
    },
    total_amount: {
      type: Sequelize.INTEGER
    },
    contact_no: {
      type: Sequelize.STRING,
    },
    coupon_id: {
      type: Sequelize.INTEGER
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    }
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart');
  }
};