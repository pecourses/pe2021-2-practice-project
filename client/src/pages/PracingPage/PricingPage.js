import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PricesList from './PricesList/PricesList';
import styles from './PricingPage.module.sass';

function PricingPage () {
  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <PricesList />
      </div>

      <Footer />
    </div>
  );
}

export default PricingPage;
