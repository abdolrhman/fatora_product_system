module.exports = (sequelize, DataTypes) => sequelize.define('provider', {
  name: {
    type: DataTypes.STRING(45),
  },
}, {
  tableName: 'providers',
});
