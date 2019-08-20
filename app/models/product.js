module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    sku: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }, {
    timestamps: false,
  });
  return Product;
};
