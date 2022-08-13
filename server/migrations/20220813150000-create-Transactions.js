const {
  OPERATION_TYPES: { INCOME, EXPENSE },
} = require('./../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Transactions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        summ: {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
        operationType: {
          allowNull: false,
          type: Sequelize.ENUM(INCOME, EXPENSE),
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      })
      .then(() =>
        queryInterface.addConstraint('Transactions', {
          type: 'check',
          fields: ['summ'],
          where: {
            summ: {
              [Sequelize.Op.gte]: 0,
            },
          },
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  },
};
