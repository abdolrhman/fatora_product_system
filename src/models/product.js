/**
 * Product Schema
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */
module.exports = (sequelize, DataTypes) => sequelize.define('product', {
  name: {
    type: DataTypes.STRING(45),
  },
  image_uri: {
    type: DataTypes.STRING(255),
  },
});
