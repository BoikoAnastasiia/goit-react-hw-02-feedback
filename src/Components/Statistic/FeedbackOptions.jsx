import styles from './Statistic.module.css';

const FeedbackOptions = ({ reviews, onAddRate }) => (
  <ul className={styles.buttonUl}>
    {reviews.map(button => (
      <li key={button} className={styles.list}>
        <button
          name={button}
          className={styles.button__bad}
          onClick={() => onAddRate(button)}
        >
          {button}
        </button>
      </li>
    ))}
  </ul>
);
export default FeedbackOptions;
