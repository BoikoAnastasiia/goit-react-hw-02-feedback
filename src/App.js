import { Component } from 'react';
import './index.css';
import Section from './Components/Statistic/';
import FeedbackOptions from './Components/Statistic';
import Statistic from './Components/Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onAddRate = options => {
    this.setState(prevstate => ({
      [options]: prevstate[options] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <Section className="container" title="Please, give a feedback for us">
        <FeedbackOptions onAddRate={this.onAddRate} reviews={options} />
        <Statistic />
      </Section>
    );
  }
}

export default App;
// '😋', '😶', '☹️';
