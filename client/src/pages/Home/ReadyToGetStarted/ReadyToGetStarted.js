import { Link } from 'react-router-dom';
import styles from './ReadyToGetStarted.module.sass';

function ReadyToGetStarted () {
  return (
    <section className={styles.articleWrapper}>
      <p className={styles.textInfo}>
        Ready to get started? Launch a contest and start receiving submissions
        instantly.
      </p>
      <Link className={styles.startedBtn} to='startContest'>
        <i className='far fa-lightbulb'></i> Start A Contest
      </Link>
    </section>
  );
}

export default ReadyToGetStarted;
