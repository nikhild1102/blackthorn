module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define('product_categories', {
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
  return Categories
}