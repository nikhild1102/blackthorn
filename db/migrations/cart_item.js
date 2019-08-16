
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cart_items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    cart_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT
    }
  });
 },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cart_items');
  }
};