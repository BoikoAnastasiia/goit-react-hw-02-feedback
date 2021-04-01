import { Component } from 'react';
import './index.css';
import StatisticButtons from './Components/Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  onAddRate = () => {
    this.setState(prevstate => ({
      good: prevstate.good + 1,
    }));
  };

  render() {
    const { rate } = this.state;
    return (
      <div className="container">
        <h1>Please, give a feedback for us</h1>
        <StatisticButtons onAddRate={this.onAddRate} rate={rate} />
      </div>
    );
  }
}

export default App;
