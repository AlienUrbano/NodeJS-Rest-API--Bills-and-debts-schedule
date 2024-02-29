'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bills.init({
    billName: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    owner: DataTypes.STRING,
    maxPaymentDate: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bills',
  });
  return Bills;
};