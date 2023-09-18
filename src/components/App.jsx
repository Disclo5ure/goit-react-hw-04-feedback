import React from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = type => {
    this.setState(prev => ({ [type]: prev[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed() + '%'
      : '0%';

  render() {
    return (
      <div className="everything-container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <h3>No statistics given</h3>
        )}
      </div>
    );
  }
}
