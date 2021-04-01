import styles from './Statistic.module.css';
// const rate = 0;

const StatisticList = ({ rate = 0 }) => (
  <div className={styles.listContainer}>
    <h2 className={styles.miniheader}>Statistics</h2>
    <ul>
      <li className={styles.statisticList}>
        <p className={styles.description}>Good: {rate}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Neutral: {rate}</p>
      </li>
      <li className={styles.statisticList}>
        <p className={styles.description}>Bad: {rate}</p>
      </li>

      <li className={styles.total}>
        <p className={styles.description}>Total: {rate}</p>
      </li>

      <li className={styles.statisticList}>
        <p className={styles.positive}>Positive feedback: {rate}</p>
      </li>
    </ul>
  </div>
);
export default StatisticList;
