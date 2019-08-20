module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    coupon_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'coupons',
        key: 'id',
      },
    },
    shipping_address_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'addresses',
        key: 'id',
      },
    },
    billing_address_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'addresses',
        key: 'id',
      },
    },
    discount: {
      type: Sequelize.FLOAT,
    },
    taxes: {
      type: Sequelize.FLOAT,
    },
    shipping_amount: {
      type: Sequelize.INTEGER,
    },
    total_amount: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
    contact_no: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }, {
    timestamps: false,
  });
  return Order;
};
