import { Component } from 'react';
import './index.css';
import Section from './Components/Statistic/';
import FeedbackOptions from './Components/Statistic/FeedbackOptions';
import Statistic from './Components/Statistic/Statistics';

class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  onAddRate = options => {
    this.setState(prevstate => ({
      [options]: prevstate[options] + 1,
    }));
  };

  calcTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => (acc += value), 0);
  };

  calcpositivePercentage = () => {
    return (
      (100 / this.calcTotalFeedback()) * (this.state.good + this.state.neutral)
    );
  };

  render() {
    console.log(this.calcTotalFeedback());
    const options = Object.keys(this.state);
    const total = this.calcTotalFeedback();
    const positivereviews = this.calcpositivePercentage();
    return (
      <Section title="Please, give a feedback for us">
        <FeedbackOptions reviews={options} onAddRate={this.onAddRate} />
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={positivereviews}
        />
      </Section>
    );
  }
}

export default App;
