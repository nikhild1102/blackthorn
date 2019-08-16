
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    sku: {
      allowNull: false,
      type: Sequelize.INTEGER
    }
  });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};