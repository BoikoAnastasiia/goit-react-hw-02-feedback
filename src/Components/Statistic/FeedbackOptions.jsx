import styles from './Statistic.module.css';

const FeedbackOptions = ({ reviews, onAddRate }) => (
  <ul className={styles.buttonList}>
    {reviews.map(button => (
      <li key={button} className={styles.list}>
        <button className={styles.button__bad} onClick={onAddRate}>
          {button}
        </button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;
