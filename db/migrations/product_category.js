
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    product_id: {
      type: Sequelize.INTEGER
    },
    category_id: {
      type: Sequelize.INTEGER
    }
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('product_categories');
  }
};