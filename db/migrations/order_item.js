
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_items', {
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
    order_id: {
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
    return queryInterface.dropTable('order_items');
  }
};