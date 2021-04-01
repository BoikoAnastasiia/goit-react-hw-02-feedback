// import { Component } from 'react';
import styles from './Statistic.module.css';

const StatisticButtons = ({ onAddRate }) => (
  <ul className={styles.list}>
    <li>
      <button className={styles.button__good} onClick={onAddRate}>
        😋
      </button>
    </li>
    <li>
      <button className={styles.button__neutral}>😶</button>
    </li>
    <li>
      <button className={styles.button__bad}>☹️</button>
    </li>
  </ul>
);
export default StatisticButtons;
