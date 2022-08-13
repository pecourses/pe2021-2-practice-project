const {
  OPERATION_TYPES: { INCOME, EXPENSE },
} = require('./../constants');

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transactions',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      summ: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
        },
      },
      operationType: {
        allowNull: false,
        type: DataTypes.ENUM(INCOME, EXPENSE),
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValues: new Date(),
      },
    },
    {
      timestamps: false,
    }
  );

  Transaction.associate = function (models) {
    Transaction.belongsTo(models.Users, { foreignKey: 'userId' });
  };

  return Transaction;
};
