
import styles from './Statistic.module.css';

const FeedbackOptions = ({ reviews, onAddRate }) => (
  <ul className={styles.list}>
    {reviews.map(button => (
      <li key={button}>
        <button className={styles.button__bad} onClick={onAddRate}>
          {button}
        </button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;
