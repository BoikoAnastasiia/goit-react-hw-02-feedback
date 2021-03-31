import styles from './Statistic.module.css';

const StatisticList = () => (
  <div className={styles.listContainer}>
    <h2 className={styles.miniheader}>Statistics</h2>
    <ul>
      <li className={styles.statisticList}>
        <p className={styles.description}>Good: {}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Neutral: {}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Bad: {}</p>
      </li>
    </ul>
  </div>
);
export default StatisticList;
