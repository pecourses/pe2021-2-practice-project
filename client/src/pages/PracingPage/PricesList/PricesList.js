import { Link } from 'react-router-dom';
import prices from './prices.json';
import styles from './PricesList.module.sass';

function PricesList () {
  const mapPrices = (p, i) => (
    <li key={i} className={styles.priceItem}>
      <div style={{ border: `5px solid ${p.color}` }}>
        <h3 style={{ color: `${p.color}` }}>{p.type}</h3>
        <p>{p.describeType}</p>
        <p style={{ color: `${p.color}` }}>{p.price}</p>
      </div>

      <ul>
        {p.profit.map((pr, i) => (
          <li key={i} data-tooltip={pr.tooltip}>
            {pr.body}
          </li>
        ))}
      </ul>
      <Link to='#' style={{ backgroundColor: `${p.color}` }}>
        <i className='fa fa-check'></i> Start
      </Link>
    </li>
  );

  return <ul className={styles.pricesList}>{prices.map(mapPrices)}</ul>;
}

export default PricesList;
