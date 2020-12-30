module.exports = (sequelize, DataTypes) => sequelize.define('product_providers', {
  available: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'product_providers',
});
