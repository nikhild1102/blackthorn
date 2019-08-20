module.exports = (sequelize, Sequelize) => {
  const Coupon = sequelize.define('coupons', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    coupon_code: {
      type: Sequelize.STRING,
    },
    discount_type: {
      type: Sequelize.STRING,
    },
    discount: {
      type: Sequelize.FLOAT,
    },
    expiry_at: {
      type: Sequelize.DATE,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  });
  return Coupon;
};
