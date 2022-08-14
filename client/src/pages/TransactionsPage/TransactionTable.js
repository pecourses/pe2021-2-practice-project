import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

function TransactionTable ({ transactions }) {
  const mapTransactions = ({ id, operationType, createdAt, summ }) => (
    <tr key={id}>
      <td>{format(new Date(createdAt), 'yyyy-MM-dd')}</td>
      <td>{operationType}</td>
      <td>{summ}</td>
    </tr>
  );

  return (
    <table>
      <caption>Transaction history</caption>
      <thead>
        <tr>
          <th>Date</th>
          <th>Operation type</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>{transactions?.map(mapTransactions)}</tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      operationType: PropTypes.oneOf(['EXPENSE', 'INCOME']).isRequired,
      createdAt: PropTypes.string.isRequired,
      summ: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionTable;
