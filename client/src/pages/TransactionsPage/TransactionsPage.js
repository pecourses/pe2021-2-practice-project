import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTransactionsAction } from '../../actions/actionCreator';
import Header from '../../components/Header/Header';
import TransactionTable from './TransactionTable';
import Footer from '../../components/Footer/Footer';
import styles from './TransactionsPage.module.sass';

function TransactionPage (props) {
  const {
    getTransactions,
    transactionsStore: { transactions, isFetching, error },
    userStore: {
      data: { firstName, lastName },
    },
  } = props;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className={styles.transactionsPageContainer}>
      <Header />
      <div>
        {firstName} {lastName}, here is your transactions list:
      </div>
      {isFetching && <div>Loading. Please, wait...</div>}
      {error && <div>Error</div>}
      {!isFetching && !error && (
        <TransactionTable transactions={transactions} />
      )}
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = ({ transactionsStore, userStore }) => ({
  transactionsStore,
  userStore,
});

const mapDispatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPage);
