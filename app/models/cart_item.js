module.exports = (sequelize, Sequelize) => {
  const CartItem = sequelize.define('cart_items', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    cart_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'id',
      },
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT,
    },
  }, {
    timestamps: false,
  });
  return CartItem;
};
