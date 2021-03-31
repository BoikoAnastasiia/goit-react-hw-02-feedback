import { Component } from 'react';
import './index.css';
import StatisticButtons from './Components/Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { rate } = this.state;
    return (
      <div className="container">
        <h1>Please, give a feedback for us</h1>
        <StatisticButtons />
      </div>
    );
  }
}

export default App;
