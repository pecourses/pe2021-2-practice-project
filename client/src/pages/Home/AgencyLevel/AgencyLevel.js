import { Link } from 'react-router-dom';
import articles from './articles.json';
import styles from './AgencyLevel.module.sass';

function AgencyLevel () {
  const mapArticles = (a, index) => (
    <li key={index} className={styles.agencyArticle}>
      <div
        style={{ backgroundColor: a.iconBgColor }}
        className={styles.iconContainer}
      >
        <i className={a.iconClassName} style={{ color: a.iconColor }}></i>
      </div>
      <h3 className={styles.agencyTitle}>{a.header}</h3>
      <p className={styles.agencyBody}>
        {a.body}{' '}
        <Link to={a.linkHref} className={styles.agencyLink}>
          Learn More
        </Link>
        .
      </p>
    </li>
  );

  return (
    <ul className={styles.agencyContainer}>{articles.map(mapArticles)}</ul>
  );
}

export default AgencyLevel;
