
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coupon_code: {
        type: Sequelize.STRING,
      },
      discount_type: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.FLOAT,
      },
      expiry_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coupons');
  },
};
