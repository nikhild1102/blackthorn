module.exports = (sequelize, Sequelize) => {
  const Categories = sequelize.define('categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Categories
}