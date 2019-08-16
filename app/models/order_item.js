module.exports = (sequelize, Sequelize) => {
  const OrderItem = sequelize.define('order_items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    order_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id'
      }
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT
    }
  },{
    timestamps: false
  });
  return OrderItem
}