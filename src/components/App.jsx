import { Component } from 'react';

export class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStateGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  updateStateNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  updateStateBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <div>
            <button onClick={this.updateStateGood}>Good</button>
            <button onClick={this.updateStateNeutral}>Neutral</button>
            <button onClick={this.updateStateBad}>Bad</button>
          </div>
          <div>
            <h3>Statistics</h3>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {total}</li>
              <li>
                Positive feedback:{' '}
                {positivePercentage > 0 ? positivePercentage : 0}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export const App = () => {
  return (
    <div>
      <FeedbackCounter />
    </div>
  );
};
