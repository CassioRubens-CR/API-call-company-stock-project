const { Model, DataTypes } = require('sequelize');

class Company extends Model {
  static init(sequelize) {
    super.init({
      symbol: DataTypes.STRING,
      companyName: DataTypes.STRING,
      latestPrice: DataTypes.DECIMAL(10, 2),
      latestUpdate: DataTypes.DATE,
      currency: DataTypes.STRING,
      website: DataTypes.STRING,
      employees: DataTypes.INTEGER,
      address: DataTypes.STRING,
      address2: DataTypes.STRING,
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      zip: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.STRING,
      description: DataTypes.TEXT,
    }, {
      sequelize,
      tableName: 'companies',
    })
  }
}

module.exports = Company;
