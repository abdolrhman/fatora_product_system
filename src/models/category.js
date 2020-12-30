module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING(45),
    },
  }, {
    tableName: 'categories',
  });
  /**
   * Category can self reference many of its own
   */
  Category.hasOne(Category, { as: 'parent', foreignKey: 'parent_id' });
  return Category;
};
