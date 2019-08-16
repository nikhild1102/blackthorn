module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
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
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING
    },
    contact_number: {
      allowNull: false,
      type: Sequelize.STRING
    }
  });
  return User
}