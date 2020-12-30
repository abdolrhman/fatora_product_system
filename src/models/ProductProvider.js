module.exports = (sequelize, DataTypes) => sequelize.define('product_providers', {
  double: {
    type: DataTypes.DOUBLE,
  },
  available: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'product_providers',
});
